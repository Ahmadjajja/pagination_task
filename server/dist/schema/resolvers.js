"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { UserList, MovieList } = require("../FakeData");
const human_1 = __importDefault(require("../models/human"));
const _ = require("lodash");
const booking_1 = __importDefault(require("../models/booking"));
const resolvers = {
    Query: {
        //MOVIE RESOLVERS
        records: () => __awaiter(void 0, void 0, void 0, function* () {
            const humanRecords = yield human_1.default.find();
            console.log("humanRecords: ", humanRecords);
            return humanRecords;
        }),
        record: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            let { pageNumber, pageSize } = args;
            pageNumber = Number(pageNumber);
            pageSize = Number(pageSize);
            const humanRecords = yield human_1.default.find()
                .skip(pageSize * (pageNumber - 1))
                .limit(pageSize);
            // let skip:number = pageSize * (pageNumber -1);
            // let limit:number = pageSize;
            // const desiredRecords = humanRecords.filter((currentRecord, index) => (index  >= skip && index < (skip + limit)))
            return humanRecords;
        }),
        booking: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            let { pageNumber, pageSize } = args;
            pageNumber = Number(pageNumber);
            pageSize = Number(pageSize);
            let skip = pageSize * (pageNumber - 1);
            let limit = pageSize;
            const bookingListCount = yield booking_1.default.find().count();
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
            const bookingList = yield booking_1.default.aggregate([
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
        }),
    },
};
module.exports = { resolvers };
