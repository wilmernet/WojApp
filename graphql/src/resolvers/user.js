const userService = require ('../services/user')

const userResolvers = {
    Query: {
        getUsers: async(parent, args) => {
            // Process logic, already defined into ../services
            let user = await userService.getUser()
            return user
        },
        getUserById: async (parent, args) => {
            let user = await userService.getUserById(args._id)
            return user
        }
    },
    Mutation:{
        createUser: async (parent, args) => {
            let user = await userService.createUser(args)
            return user
        },
        updateUser: async (parent, args) => {
            let user_update = await userService.updateUser(args._id, args)
            return user_update
        }
    }
}

module.exports = {
    userResolvers
}