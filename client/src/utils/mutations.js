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
          title
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
                title
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
            follows {
                _id
                streamName
            }
            videos {
                _id
                youtubeID
                title
            }
        }
    }
`;

export const ADD_VIDEO = gql`
    mutation addVideo($youtubeID: String!, $title: String!) {
        addVideo(youtubeID: $youtubeID, title: $title) {
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
                title
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
                title
            }
        }
    }
`;

export const REMOVE_VIDEO = gql`
    mutation removeVideo($youtubeID: String!, $title: String!) {
        removeVideo(youtubeID: $youtubeID, title: $title) {
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
                title
            }
        }
    }
`;