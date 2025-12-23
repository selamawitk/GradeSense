const mongoose = require("mongoose")
const User = require("./User")

const semesterSchema = new mongoose.Schema({
    title: {
        type :String,
        required :true
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    courses: [{
        type :mongoose.Schema.Types.ObjectId,
        ref:course
    }],
    gpa:{
        type:Number,
    },
    totalCredits :{
        type: Number
    }
});

module.exports = mongoose.model("Semester", semesterSchema)