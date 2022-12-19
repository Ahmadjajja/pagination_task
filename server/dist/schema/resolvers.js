"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { UserList, MovieList } = require("../FakeData");
const human_1 = __importDefault(require("../models/human"));
const _ = require("lodash");
const resolvers = {
    Query: {
        //MOVIE RESOLVERS
        records: () => {
            const humanRecords = human_1.default.find();
            console.log("humanRecords: ", humanRecords);
            return humanRecords;
        },
        record: (parent, args) => {
            const { pageNumber, pageSize } = args;
            console.log("pageNumber", pageNumber);
            //   const movie = _.find(MovieList, { name });
            //   return movie;
        },
    },
};
module.exports = { resolvers };
