import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});


const dataSchema = new mongoose.Schema({
  Name: { required: true, type: String },
  cellphone1: { required: true, type: Number },
  cellphone2: { required: true, type: Number },
  homenumber: { required: true, type: Number },
  address: { required: true, type: String },
  city: { required: true, type: String },
  state: { required: true, type: String },
  emailid: { required: true, type: String },
  jobtitle: { required: true, type: String },
  paymentmethod: { required: true, type: String },
  dateofbirth: { required: true, type: Date },
  dateofjoining: { required: true, type: Date },
  languages: { required: true, type: String },
  ofpaidvacationdaysallowed: { required: true, type: Number },
  ofpaidsickvacationallowed: { required: true, type: Number },
  employeestatus: { required: true, type: String },
});


const User = mongoose.model("User", dataSchema);


app.post("/submit-form", async (req, res) => {
  try {
    const {
      Name,
      cellphone1,
      cellphone2,
      homenumber,
      address,
      city,
      state,
      emailid,
      jobtitle,
      paymentmethod,
      dateofbirth,
      dateofjoining,
      languages,
      ofpaidvacationdaysallowed,
      ofpaidsickvacationallowed,
      employeestatus,
    } = req.body;

    const newUser = new User({
      Name,
      cellphone1,
      cellphone2,
      homenumber,
      address,
      city,
      state,
      emailid,
      jobtitle,
      paymentmethod,
      dateofbirth,
      dateofjoining,
      languages,
      ofpaidvacationdaysallowed,
      ofpaidsickvacationallowed,
      employeestatus,
    });

    await newUser.save();
    res.status(201).json({ message: "User added successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error saving user data", error });
  }
});


app.listen(3000, () => {
  console.log(`Server is started at port 3000`);
});
