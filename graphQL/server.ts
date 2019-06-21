import express from "express";
import mongoose from "mongoose";
import depthLimit from "graphql-depth-limit";
import compression from "compression";
import { createServer } from "http";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import schema from "./bookings/booking.schema";

mongoose.connect(
  "mongodb://localhost/graphqlTalk",
  (err: any) => {
    if (err) throw err;
    console.log("connected to mongo");
  }
);
const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});
app.use("*", cors());
app.use(compression());
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen(
  { port: 4000 },
  (): void =>
    console.log(
      `\n🚀 🚀 🚀  GraphQL talk server is now running on http://localhost:3000/graphql 🚀 🚀 🚀\n`
    )
);
