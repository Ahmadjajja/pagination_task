"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const typeDefs = (0, graphql_1.buildSchema)(`
  type Record {
    id: ID
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
    record(pageNumber: Int!, pageSize: Int!): [Record!]!
  }
`);
module.exports = { typeDefs };
