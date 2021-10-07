const { AuthenticationError } = require('apollo-server-express');
const { User, Follow, Video } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('follows')
          .populate('videos');

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('follows')
        .populate('videos');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log('add user');
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addFollow: async (parent, { streamName }, context) => {
      console.log('add follow');
      if (context.user) {
        try {
          const user = await User.findOne(
            { _id: context.user._id })
            .populate("follows");

          user.follows.forEach(data => {
            if (streamName === data.streamName) {
              throw new Error;
            }
          });

          const follow = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { follows: { streamName: streamName } } },
            { new: true, runValidators: true }
          ).populate("follows")
            .populate('videos');

          return follow;

        }
        catch (error) {
          throw new AuthenticationError('You are already following that streamer!');
        };
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addVideo: async (parent, { youtubeID }, context) => {
      console.log('add follow');
      if (context.user) {
        try {
          const user = await User.findOne(
            { _id: context.user._id })
            .populate("videos");

          user.videos.forEach(data => {
            if (youtubeID === data.youtubeID) {
              throw new Error;
            }
          });

          const video = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { videos: { youtubeID: youtubeID } } },
            { new: true, runValidators: true }
          ).populate("follows")
            .populate('videos');

          return video;
        }
        catch (error) {
          throw new AuthenticationError('You have already saved that video!');
        };

      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeFollow: async (parent, { streamName }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { follows: { streamName: streamName } } },
          { new: true }
        ).populate("follows")
        .populate('videos');

        return updatedUser
      };

      throw new AuthenticationError("You need to be logged in!");
    },
    removeVideo: async (parent, { youtubeID }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { videos: { youtubeID: youtubeID } } },
          { new: true }
        ).populate("follows")
        .populate('videos');

        return updatedUser
      };

      throw new AuthenticationError("You need to be logged in!");
    }

  }
};

module.exports = resolvers;
