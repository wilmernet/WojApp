const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema
const User = require('./user')
const Project = require('./project')

const AdvanceSchema = new Schema(
    {
        project:{
            type: Schema.Types.ObjectId,
            ref: "Project"
        },
        advanceDate:{
            type: Date,
            default: new Date()
        },
        description:{
            type: String,
            default: 'null',            
        },
        estudentName:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },  
        observation: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        },{
            type: String,
            default: 'null',            
        }]              
    },
    { timestamps: true }
)

ProjectSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Advance", AdvanceSchema)