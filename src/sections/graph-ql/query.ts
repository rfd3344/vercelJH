
import { gql } from 'src/libs/apollo';


export const GET_USERS = gql`
  query {
    users (options: { paginate: { page: 1, limit: 10 } }) {
      data {
        id
        name
        email
        address {
          street
          suite
          city
          zipcode
          geo {
            lat
            lng
          }
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID!){
    user(id: $id) {
      id
      name
      username
      email
      posts {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
      albums {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
      todos {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query User($id: ID!){
    user(id: $id) {
      id
      name
      username
      email
      posts {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
      albums {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
      todos {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
    }
  }
`;
