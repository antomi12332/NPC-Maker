import { gql } from "@apollo/client";

// mutations
export const DELETE_HISTORY_MUTATION = gql`
mutation DeleteHistory($id: String!) {
  deleteFromhistoryCollection(filter: {id: {eq:$id}} atMost: 1){
    records {
      id
      title
    }
  }}
`;

export const UPDATE_HISTORY_MUTATION = gql`
mutation UpdateHistory($id: String!, $title: String!, $description: String!) {
  updatehistoryCollection(filter: {id: {eq: $id}}, set: {title: $historyTitle, description: $historyDescription}) {
    records {
      id
      title
      description
    }
  }
}
`;

export const CREATE_HISTORY_MUTATION = gql`
mutation CreateHistory($title: String!, $description: String!) {
  insertIntohistoryCollection(objects: [{project_id: $project_id title: $title description: $description}]){
    records {
      id
      title
      description
    }
  }
}
`;



// queries
export const GET_HISTORIES = gql`
query GetHistory($id: String!) {
  projectsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        historyCollection(orderBy: {id: AscNullsLast}) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }
    }
  }
}
`;