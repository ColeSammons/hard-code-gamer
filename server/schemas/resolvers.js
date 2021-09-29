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
      if (context.user) {
        try {
          const follow = await Follow.create({ streamName });

          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { follows: follow._id } },
            { new: true }
          ).populate('follows')
            .populate('videos');

          return updatedUser;
        }
        catch (error) {
          throw new AuthenticationError('You are already following that streamer!');
        };
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addVideo: async (parent, { youtubeID }, context) => {
      console.log(youtubeID);
      if (context.user) {
        try {
          const video = await Video.create({ youtubeID });

          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { videos: video._id } },
            { new: true }
          ).populate('videos')
            .populate('follows');

          return updatedUser;
        }
        catch (error) {
          throw new AuthenticationError('You have already saved that video!');
        };

      }

      throw new AuthenticationError('You need to be logged in!');
    }

  }
};

module.exports = resolvers;
