import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import {buildSchema} from 'graphql'
import {readFileSync} from "fs";
import * as core from "express-serve-static-core";
import {GraphQLSchema} from "graphql/type/schema";
import {rootResolvers} from "./resolvers";

const PORT: number = 3001;
const app: core.Express = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

const schemaString: string = readFileSync('./schema.graphql', {encoding: 'utf-8'});
const schema: GraphQLSchema = buildSchema(schemaString);

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: rootResolvers,
    graphiql: true
}))

app.listen(PORT, (): void => {
    console.log(`server is listening on ${PORT}`);
});