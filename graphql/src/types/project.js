const {gql} = require("apollo-server-express")
const { GraphQLScalarType, Kind } = require('graphql');

const projectType = gql`
    scalar Date

    type User{
        _id: ID!
        name: String!
        lastname: String!
        userIdentify: String!
        role: String
        status: String
        email: String!
        password: String!
        projects:[Project]
    }
    type Project{
        _id: ID!
        projectName: String!
        generalObjectives: String
        specificObjectives: String
        budget: Int
        initialDate: Date
        endDate: Date
        leaderName: ID
        memberName: ID
        status: String
        phase: String
    }
    type Query{
        getProjects: [Project]
        getProjectById(_id:String): Project
    }

    type Mutation{
        createProject(
            projectName: String
            generalObjectives: String
            specificObjectives: String
            budget: Int
            initialDate: Date
            endDate: Date
            leaderName: ID
            memberName: ID
            status: String
            phase: String
        ): Project
        updateProject(
            _id: ID!
            projectName: String
            generalObjectives: String
            specificObjectives: String
            budget: Int
            initialDate: Date
            endDate: Date
            leaderName: ID
            memberName: ID
            status: String
            phase: String
        ): Project
    }
`;

module.exports = { projectType }