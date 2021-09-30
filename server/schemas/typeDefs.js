const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    follows: [Follow]
    videos: [Video]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Follow {
    _id: ID
    streamName: String
  }

  type Video {
    _id: ID
    youtubeID: String
  }

  type Query {
    me: User
    users: [User]
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFollow(userID: ID!, streamName: String!): User
    addVideo(userID: ID!, youtubeID: String!): User
    removeFollow(_id: ID!): User
    removeVideo(_id: ID!): User
  }
`;

module.exports = typeDefs;