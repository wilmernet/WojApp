const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Project = require('./project')

/**
 * * ****************** Valid roles and states required by UH ******************
 */

 const validRoles = {
    values: ["administrador", "lider", "estudiante"]
}

const validStatus = {
    values: ["pendiente", "autorizado", "noAutorizado"]
}

/**
 * * ****************** User Schema definition ******************
 */


const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true,
        },
        userIdentify: {
            type: String,
            index: true,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: validRoles
        },
        status: {
            type: String,
            default: 'pendiente',
            enum: validStatus
        },
        email: {
            type: String,
            index: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        projects:[{
            type: Schema.Types.ObjectId,
            ref: "Project"
        }]
    },
    { timestamps: true }
)

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema)