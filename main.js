const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Employe = require("./models/Employe");

 mongoose.connect("mongodb://127.0.0.1:27017/company");
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/genrate", async(req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({}) 
  // Genrate random data

  let randomNames = ['Rohan', 'Sohan', 'Mohan', "sobhan"]
  let randomLang = ['Python', 'C', 'Java', 'js']
  let randomCities = ['Blishpur', 'jaypur', 'Delhi', 'Mumbai']

  for (let index = 0; index < 10; index++) {
    let e = await Employe.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city:  getRandom(randomCities),
      isManager: (Math.random()>0.5)?true:false })
    console.log(e)

  }
  res.render("index", { foo: "Foo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
