const Advance = require('../models/advance')

createAdvance = async (advance) => {
    let advanceInstance = new Advance(advance)
    advance = await advanceInstance.save()
    return advance
}

getAdvances  = async () => {
    let advance = await Advance.find({})
    .populate("projects")
    .populate("estudentName")
    .populate("observation.admin")
    return advance
}

getAdvanceById = async(advanceId) =>{
    let user = await User.findById(advanceId)
    .populate("projects")
    .populate("estudentName")
    .populate("observation.admin")
    return advance
}

updateAdvance = async (advanceId, advance)=> {
    let new_advance = Advance.findByIdAndUpdate(advanceId, advance, {new:true})
    return new_advance
}

module.exports = {
    createAdvance,
    getAdvances,
    getAdvanceById,
    updateAdvance,    
}
