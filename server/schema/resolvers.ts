// const { UserList, MovieList } = require("../FakeData");
import Human from "../models/human";
const _ = require("lodash");
const resolvers = {
  Query: {
    //MOVIE RESOLVERS
    records: async () => {
      const humanRecords =await Human.find();
      console.log("humanRecords: ", humanRecords);
      return humanRecords;
    },

    record:async (parent:any, args:any) => { 
      let { pageNumber, pageSize } = args;
      pageNumber = Number(pageNumber)
      pageSize = Number(pageSize)
      const humanRecords =await Human.find().skip(pageSize* (pageNumber-1)).limit(pageSize);
  
      let skip:number = pageSize * (pageNumber -1);
      let limit:number = pageSize;

      // const desiredRecords = humanRecords.filter((currentRecord, index) => (index  >= skip && index < (skip + limit)))
      return humanRecords 
      
    },
  },
};

module.exports = { resolvers };
