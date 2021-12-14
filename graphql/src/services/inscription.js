const Inscription = require('../models/inscription')

createInscription = async (inscription) => {
    let inscriptionInstance = new User(inscription)
    inscription = await inscriptionInstance.save()
    return inscription
}

getInscriptions = async () => {
    let inscription = await inscription.find({})
    .populate("projects")
    .populate("estudentName")
    .populate("observation.admin")
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
