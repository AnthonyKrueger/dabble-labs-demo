const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type PopData {
        _id: ID
        country: String
        year: Int
        population: Int
    }

    type Query {
        popdatas: [PopData]!
        popdata(popId: ID!): PopData
    }
`

module.exports = typeDefs;