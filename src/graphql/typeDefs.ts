import {
  gql
} from 'apollo-server-express';


export const typeDefs = gql`
type Listing {
  id: ID!,
  title: String!,
  image: String!,
  address: String!,
  price: Int!,
  numOfGuests: Int!,
  numOfBaths: Int!,
  numOfBeds: Int!,
  rating: Int!,
  }

  type Query {
    listing: [Listing!]!
  }
  
  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;

