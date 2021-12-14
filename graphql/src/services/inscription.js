const Inscription = require('../models/inscription')
const userService= require('./user')
const projectService= require('./project')

createInscription = async (inscription) => {
    let inscriptionInstance = new User(inscription)
    created_inscription = await inscriptionInstance.save()
    await userService.updateAdvance(inscription['studentName'], created_inscription['_id'])
    await projectService.updateProject(inscription['proyect'], created_inscription['_id'])
    return created_inscription
}

getInscriptions = async () => {
    let inscription = await inscription.find({})
    .populate("project")
    .populate("estudentName")
    return inscription
}

getInscriptionById = async(inscriptionId) =>{
    let inscription = await Inscription.findById(inscriptionId)
    .populate("projects")
    .populate("estudentName")
    .populate("observation.admin")
    return inscription
}

updateInscription = async (inscriptionId, inscription)=> {
    let new_inscription = User.findByIdAndUpdate(inscriptionId, inscription, {new:true})
    return new_inscription
}

module.exports = {
    createInscription,
    getInscriptions,
    getInscriptionById,
    updateInscription    
}
