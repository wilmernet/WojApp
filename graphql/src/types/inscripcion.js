const {gql} = require("apollo-server-express")
const { GraphQLScalarType, Kind } = require('graphql');

const inscriptionType = gql`
    scalar Date
    
    type Inscription{
        _id: ID!
        project: Project!
        estudentName: User!
        advanceDate: Date!
        status_description: String!        
        admissionDate: Date
        egressDate: Date
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
        getInscriptions: [Inscription]
        getInscriptionById(_id:String): Inscription
    }

    type Mutation {
        createInscription(
            project: Project!
            estudentName: User!
            advanceDate: Date!
            status_description: String!        
            admissionDate: Date
            egressDate: Date
        ): Inscription
        updateInscription(
            _id: ID!
            project: Project!
            estudentName: User!
            advanceDate: Date!
            status_description: String!        
            admissionDate: Date
            egressDate: Date
        ): Inscription
    }
`;

module.exports = {inscriptionType}