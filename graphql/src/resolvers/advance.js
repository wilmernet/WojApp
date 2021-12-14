const advanceService = require('../services/advance')

const advanceResolvers = {
    Query:{
        getAdvances: async (parent, args) => {
            let advance = advanceService.getAdvances()
            return advance
        },
        getAdvanceById: async (parent, args) => {
            let advance = await advanceService.getAdvanceById(args._id)
            return advance
        }
    },
    Mutation: {
        createAdvance: async (parent, args) => {
            let advance = await advanceService.createAdvance(args)
            return advance
        },
        updateAdvance: async (parent, args) => {
            let advance = await advanceService.updateAdvance(args._id, args)
            return advance
        }
    }
}

module.exports = { advanceResolvers }
