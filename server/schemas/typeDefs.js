// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type User {
//     _id: ID!
//     username: String
//     email: String
//     follows: [Follow]
//     videos: [Video]
//   }
//   type Auth {
//     token: ID!
//     user: User
//   }
//   type Follow {
//     streamName: String!
//   }

//   type Video {
//     youtubeID: String!
//   }

//   type Query {
//     me: User
//   }
  
//   type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  input savedBook {
    authors: [String]
    title: String
    description: String
    bookId: String
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;