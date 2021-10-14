import { gql } from '@apollo/client';

export const GET_ME = gql`
    query {
        me {
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

export const GET_USERS = gql`
    query {
        users {
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