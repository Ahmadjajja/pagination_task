// const { UserList, MovieList } = require("../FakeData");
import Human from "../models/human";
const _ = require("lodash");
import Booking from "../models/booking";

const resolvers = {
  Query: {
    //MOVIE RESOLVERS
    records: async () => {
      const humanRecords = await Human.find();
      console.log("humanRecords: ", humanRecords);
      return humanRecords;
    },

    record: async (parent: any, args: any) => {
      let { pageNumber, pageSize } = args;
      pageNumber = Number(pageNumber);
      pageSize = Number(pageSize);
      const humanRecords = await Human.find()
        .skip(pageSize * (pageNumber - 1))
        .limit(pageSize);

      // let skip:number = pageSize * (pageNumber -1);
      // let limit:number = pageSize;

      // const desiredRecords = humanRecords.filter((currentRecord, index) => (index  >= skip && index < (skip + limit)))
      return humanRecords;
    },

    booking: async (parent: any, args: any) => {
      let { pageNumber, pageSize } = args;
      pageNumber = Number(pageNumber);
      pageSize = Number(pageSize);
      let skip: number = pageSize * (pageNumber - 1);
      let limit: number = pageSize;

      const bookingListCount: any = await Booking.find().count();
      console.log(bookingListCount);

      // const bookingList: any = await Booking.aggregate([
      //   {
      //     $facet: {
      //       // "counter": [
      //       //   {
      //       //     $lookup: {
      //       //       from: "patients",
      //       //       localField: "patientId",
      //       //       foreignField: "_id",
      //       //       as: "patientData",
      //       //     },
      //       //   },
      //       //   { $unwind: "$patientData" },
      //       //   {
      //       //     $lookup: {
      //       //       from: "doctors",
      //       //       localField: "doctorId",
      //       //       foreignField: "_id",
      //       //       as: "doctorData",
      //       //     },
      //       //   },
      //       //   { $unwind: "$doctorData" },
      //       //   ,
      //       //   { $count: "total_documents" },
      //       // ],
      //       "booking": [
      //         {
      //           $lookup: {
      //             from: "patients",
      //             localField: "patientId",
      //             foreignField: "_id",
      //             as: "patientData",
      //           }, 
      //         },
      //         { $unwind: "$patientData" },
      //         {
      //           $lookup: {
      //             from: "doctors",
      //             localField: "doctorId",
      //             foreignField: "_id",
      //             as: "doctorData",
      //           },
      //         },
      //         { $unwind: "$doctorData" },
      //         {
      //           $skip: skip,
      //         },
      //         {
      //           $limit: limit,
      //         },
      //         {
      //           $addFields: { count: bookingListCount },
      //         },
      //       ],
      //     },
      //   },
      // ]);

      const bookingList:any = await Booking.aggregate([
        {
          $lookup: {
            from: "patients",
            localField: "patientId",
            foreignField: "_id",
            as: "patientData",
          },
        },
        { $unwind: "$patientData" },
        {
          $lookup: {
            from: "doctors",
            localField: "doctorId",
            foreignField: "_id",
            as: "doctorData",
          },
        },
        { $unwind: "$doctorData" },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
        {
          $addFields: { count: bookingListCount },
        },
      ]);
      console.log("bookingList: ", bookingList);

      return bookingList;
    },
  },
};

module.exports = { resolvers };
