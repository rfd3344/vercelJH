import {
  type NextRequest,
  NextResponse,
} from 'src/libs/next';

// import { ApolloServer, gql } from 'apollo-server';

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'Hello, GraphQL!',
//   },
// };
// const server = new ApolloServer({ typeDefs, resolvers });

export async function GET(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: 'Hello World' });
}

export async function POST(request: NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: 'Hello World' });
}