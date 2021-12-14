const {gql} = require("apollo-server-express")
const { GraphQLScalarType, Kind } = require('graphql');

const inscriptionType = gql`
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

    type Query {
        getUsers: [User]
        getUserById(_id:String): User
    }

    type Mutation {
        createUser(
            name: String!
            lastname: String!
            userIdentify: String!
            role: String
            status: String
            email: String!
            password: String!
        ): User
        updateUser(
            _id: ID!
            name: String
            lastname: String
            userIdentify: String!
            role: String
            status: String
            email: String!
            password: String
        ): User
    }
`;

module.exports = {inscriptionType}