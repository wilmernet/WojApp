const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema
const User = require('./user')

const validStatus = {
    values: ["activo", "inactivo"]
}

const validPhases = {
    values: ["null", "iniciado", "enDesarrollo", "terminado"]
}

const ProjectSchema = new Schema(
    {
        projectName:{
            type: String,
            index: true,
            required: true,
            unique: true
        },
        generalObjectives: {
            type: String,
            min: 0,
            max: 999999
        },
        specificObjectives:{
            type: String,
            min: 0,
            max: 999999
        },
        budget:{
            type: Number
        },
        initialDate:{
            type: Date,
            default: new Date()
        },
        endDate:{
            type: Date
        },
        leaderName:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        memberName:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        status:{
            type: String,
            default: 'inactivo',
            enum: validStatus
        },
        phase:{
            type: String,
            default: 'null',
            enum: validPhases
        }
    },
    { timestamps: true }
)

ProjectSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Project", ProjectSchema)