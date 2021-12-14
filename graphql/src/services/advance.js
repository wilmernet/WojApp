const Advance = require('../models/advance')
const userService= require('./user')
const projectService= require('./project')

createAdvance = async (advance) => {
    let advanceInstance = new Advance(advance)
    created_advance = await advanceInstance.save()
    await userService.updateAdvance(advance['estudentName'], created_advance['_id'])
    await projectService.updateProject(advance['project'], created_advance['_id'])
    return created_advance
}

getAdvances  = async () => {
    let advance = await Advance.find({})
    .populate("project")
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
