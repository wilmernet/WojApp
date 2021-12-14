const Project = require('../models/project')
const userService = require('./user')


createProject = async(project) => {
    let projectInstance = new Project(project)
    created_project = await projectInstance.save()
    await userService.updateProject(project['leaderName'], created_project['_id'])
    return created_project
}

getProjects = async() => {
    let projects = await Project.find({})
    return projects
}

getProjectById = async(projectId) => {
    let project = await Project.findById(projectId).exec()
    return project
}

updateProject = async(projectId, project) => {
    let new_project = await Project.findByIdAndUpdate(projectId, project, {new:true})
    return new_project
}

updateAdvance = async (projectId, advanceId) => {
    project = await User.findByIdAndUpdate(projectId, {
        $push:{
            advances: advanceId
        }
    })
    return project
}

updateInscription = async (projectId, inscriptionId) => {
    project = await User.findByIdAndUpdate(projectId, {
        $push:{
            inscriptions: inscriptionId
        }
    })
    return project
}

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    updateAdvance,
    updateInscription
}