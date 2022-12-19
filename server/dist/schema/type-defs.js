"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { gql } = require("apollo-server");
const apollo_server_1 = __importDefault(require("apollo-server"));
const typeDefs = (0, apollo_server_1.default) `
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
