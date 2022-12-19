// const { UserList, MovieList } = require("../FakeData");
import Human from "../models/human";
const _ = require("lodash");
const resolvers = {
  Query: {
    //MOVIE RESOLVERS
    records: () => {
      const humanRecords = Human.find();
      console.log("humanRecords: ", humanRecords);
      return humanRecords;
    },

    record: (parent:any, args:any) => {
      const { pageNumber, pageSize } = args;
      console.log("pageNumber", pageNumber);

      //   const movie = _.find(MovieList, { name });
      //   return movie;
    },
  },
};

module.exports = { resolvers };
