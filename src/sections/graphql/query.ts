
import { gql } from 'src/libs/apollo';


export const GET_USERS = gql`
  query {
    users (options: { paginate: { page: 1, limit: 10 } }) {
      data {
        id
        name
        email
        posts {
          data {
            id
            # title
            # body
          }
        }
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

export const GET_POSTS_BY_USER_ID = gql`
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
  query {
    posts (options: { paginate: { page: 1, limit: 30 } }) {
      data {
        id
        title
        body
        comments {
          data {
            id
            name
            email
            body
          }
        }
      }
      meta {
        totalCount
      }
    }
  }
`;



export const ADD_POST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;


export const UPDATE_POST = gql`
  mutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST = gql`
  mutation($id: ID!) {
    deletePost(id: $id)
  }
`;