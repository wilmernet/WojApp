const inscriptionService = require ('../services/inscription')

const inscriptionResolvers = {
    Query: {
        getInscriptions: async(parent, args) => {            
            let inscription = await inscriptionService.getInscriptions()
            return inscription
        },
        getInscriptionById: async (parent, args) => {
            let inscription = await inscriptionService.getInscriptionById(args._id)
            return inscription
        }
    },
    Mutation:{
        createInscription: async (parent, args) => {
            let inscription = await inscriptionService.createInscription(args)
            return inscription
        },
        updateInscription: async (parent, args) => {
            let inscription_update = await inscriptionService.updateInscription(args._id, args)
            return inscription_update
        }
    }
}

module.exports = {
    inscriptionResolvers
}
      