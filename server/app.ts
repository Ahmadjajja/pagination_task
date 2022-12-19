import express, { Express, Request, Response } from 'express';
import cors from "cors"; 
import morgan from "morgan";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import 'dotenv/config';

const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers")
const server = new ApolloServer({ typeDefs, resolvers });
// server.listen().then(({ url }) => {
//   console.log(`Your API is running at ${url}`); 
// })


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.options("*", cors());
//middleware
/* The above code is using the express.json() method to parse the incoming request bodies in a
middleware before your handlers, available under the req.body property. */
app.use(express.json());
app.use(morgan("tiny"));





//Database
mongoose
  .connect("mongodb+srv://ahmadjajja86:ahmadjajja86@cluster0.ua4hncd.mongodb.net/Testing?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database Connection is ready...");
    // app.listen(port, () => {
    //   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    // });
    server.listen().then(({port} : {port:any}) => {
      console.log(`Your API is running at ${port}`); 
  })
  })
  .catch((err) => {
    // throw createHttpError(501, "Unable to connect to database");
    console.log(err);
  });