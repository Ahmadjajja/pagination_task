// const { gql } = require("apollo-server");
import gql from "apollo-server"

const typeDefs = gql`
  type Record {
    id: ID!
    index: Int
    isActive: Boolean
    balance: String
    picture: String
    age: Int
    eyeColor: String
    name: String
    gender: String
    company: String
    email: String
    phone: String
    address: String
    registered: String
    favoriteFruit: String
    pageNumber: Int
    pageSize: Int
  }
  type Query {
    records: [Record!]!
    record(pageNumber: Int!, pageSize: Int!): Record!
  }
`;

module.exports = { typeDefs };