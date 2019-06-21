import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./booking.resolver";
import typeDefs from "./booking.types";

const options = {
  typeDefs,
  resolvers
};

const executableSchema = makeExecutableSchema(options);
export default executableSchema;
