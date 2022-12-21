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
      const humanRecords =await Human.find();
      let { pageNumber, pageSize } = args;
      pageNumber = Number(pageNumber)
      pageSize = Number(pageSize)
  
      let skip:number = pageSize * (pageNumber -1);
      let limit:number = pageSize;

      const desiredRecords = humanRecords.filter((currentRecord, index) => (index  >= skip && index < (skip + limit)))
      return desiredRecords 
      
    },
  },
};

module.exports = { resolvers };
