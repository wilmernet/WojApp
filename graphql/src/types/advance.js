const {gql} = require("apollo-server-express")
const { GraphQLScalarType, Kind } = require('graphql');


const advanceType = gql`
    scalar Date
    type Advance{
        _id: ID!
        project: Project
        advanceDate: Date!
        description: String!
        estudentName: User!
        observation: {
            admin:User,
            description: String
        }!
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
        project: String!
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
        getAdvances: [Advance]
        getAdvanceById(_id:String): Advance
    }

    type Mutation {
        createAdvance(
            project: Project
            advanceDate: Date!
            description: String!
            estudentName: User!
            observation: {
                admin:User,
                description: String
            }!
        ): Advance
        updateAdvance(
            _id: ID!
            project: Project
            advanceDate: Date!
            description: String!
            estudentName: User!
            observation: {
                admin:User,
                description: String
            }!
        ): Advance
    }
`;

module.exports = {advanceType}
