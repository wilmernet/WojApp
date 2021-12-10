const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema
const User = require('./user')
const Project = require('./project')

const statusInscription = {
    values: ['Aceptada', 'Rechazada']
}

const InscriptionSchema = new Schema({
    proyect: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,      
    },
    studentName:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },    
    status_inscription: {
      type: String,
      enum: statusInscription,
    },
    admissionDate: {
      type: Date,
      default: new Date()
    },
    egressDate: {
      type: Date,      
    },
},
    {
        timestamps: true
    }
)
module.exports = model('Inscription', InscriptionSchema)