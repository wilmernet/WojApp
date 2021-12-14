const User = require('../models/user')

createUser = async (user) => {
    let userInstance = new User(user)
    created_user = await userInstance.save()
    return created_user
}

getUser = async () => {
    let user = await User.find({}).populate("projects")
    return user
}

getUserById = async(userId) =>{
    let user = await User.findById(userId).populate("projects")
    return user
}

updateUser = async (userId, user)=> {
    let new_user = User.findByIdAndUpdate(userId, user, {new:true})
    return new_user
}

updateProject = async (userId, projectId) => {
    user = await User.findByIdAndUpdate(userId, {
        $push:{
            projects: projectId
        }
    })
    return user
}

updateInscription = async (userId, inscriptionId) => {
    user = await User.findByIdAndUpdate(userId, {
        $push:{
            inscriptions: inscriptionId
        }
    })
    return user
}

updateAdvance = async (userId, advanceId) => {
    user = await User.findByIdAndUpdate(userId, {
        $push:{
            advances: advanceId
        }
    })
    return user
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    updateProject,
    updateInscription,
    updateAdvance
}
