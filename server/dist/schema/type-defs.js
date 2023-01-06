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

  type patient {
    id: ID
    picture: String
    age: Int
    eyeColor: String
    patientName: String
    gender: String
    email: String
    phone: String
    address: String
    about: String
    registered: String
    diseases: String
  }
  type doctor {
    id: ID
    picture: String
    doctorName: String
    gender: String
    hospitalName: String
    email: String
    phone: String
    address: String
    about: String
    registered: String
    qualification: String 
  }
  type booking {
    id: ID
    patientData: patient
    doctorData: doctor
    count: Int
  }


  type Query {
    records: [Record!]!
    record(pageNumber: Int!, pageSize: Int!): [Record!]!
    booking(pageNumber: Int!, pageSize: Int!): [booking]
  }
`);
module.exports = { typeDefs };
