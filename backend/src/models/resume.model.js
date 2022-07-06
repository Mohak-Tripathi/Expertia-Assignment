const mongoose = require('mongoose')

const resumeSchema= new mongoose.Schema({ 

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mob: {type: Number, required: true},
    resume: {type: String, required: true},
    notice: {type: Number, required: true},

},{

    versionKey: false,
    timestamps: true,
});

const Resume= mongoose.model("resume", resumeSchema);

module.exports= Resume;