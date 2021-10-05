import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String! ,$password: String!) {
    login(email: $email ,password: $password) {
      token
      user {
        _id
        username
        email
        follows {
          _id
          streamName
        }
        videos {
          _id
          youtubeID
        }
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
        token
        user {
            _id
            username
            email
            follows {
                _id
                streamName
            }
            videos {
                _id
                youtubeID
            }
        }
        }
    }
`;

export const ADD_FOLLOW = gql`
    mutation addFollow($streamName: String!) {
        addFollow(streamName: $streamName) {
            _id
            username
            email
            followCount
            follows {
                _id
                streamName
            }
            videos {
                _id
                youtubeID
            }
        }
    }
`;

export const ADD_Video = gql`
    mutation addVideo($youtubeID: String!) {
        addVideo(youtubeID: $youtubeID) {
            _id
            username
            email
            reactionCount
            follows {
                _id
                streamName
            }
            videos {
                _id
                youtubeID
            }
        }
    }
`;

export const REMOVE_FOLLOW = gql`
    mutation removeFollow($streamName: String!) {
        removeFollow(streamName: $streamName) {
            _id
            username
            email
            follows {
                _id
                streamName
            }
            videos {
                _id
                youtubeID
            }
        }
    }
`;

export const REMOVE_VIDEO = gql`
    mutation removeVideo($youtubeID: String!) {
        removeVideo(youtubeID: $youtubeID) {
            _id
            username
            email
            follows {
                _id
                streamName
            }
            videos {
                _id
                youtubeID
            }
        }
    }
`;