const {gql} = require("apollo-server-express")
const { GraphQLScalarType, Kind } = require('graphql');


const advanceType = gql`
    scalar Date
    type Advance{
        _id: ID!
        projectName: [Project]
        advanceDate: Date!
        description: String!
        estudentName: [User]!
        observation: [[User],String]!
    }
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
        getAdvance: [Advance]
        getAdvanceById(_id:String): Advance
    }

    type Mutation {
        createAdvance(
            name: String!
            lastname: String!
            userIdentify: String!
            role: String
            status: String
            email: String!
            password: String!
        ): User
        updateAdvance(
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

module.exports = {advanceType}
