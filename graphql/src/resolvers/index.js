const {projectResolvers} = require('./project');
const {userResolvers} = require('./user')
const {advanceResolvers} = require('./advance')
const {inscriptionResolvers} = require('./inscription')

const resolvers = [projectResolvers, userResolvers, advanceResolvers, inscriptionResolvers]

module.exports = {resolvers}