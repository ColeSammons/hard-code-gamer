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
    addFollow(streamName: String!): User
    addVideo(youtubeID: String!): User
    removeFollow(streamName: String!): User
    removeVideo(youtubeID: String!): User
  }
`;

module.exports = typeDefs;