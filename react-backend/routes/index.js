// var express = require('express');
// var router = express.Router();

const router=require("express").Router();

const studentRouter=require("./students");
const campusesRouter=require("./campuses");

// const studentRouter=require("./singleStudent");
// const campusesRouter=require("./singleCampus");

/* GET home page. */
router.get('/',function(req,res){
    res.json("home");
})


router.use("/students",studentRouter);
router.use("/campuses",campusesRouter);

// router.use("/singleStudent",studentRouter);
// router.use("/singleCampus",campusRouter);


module.exports = router;
