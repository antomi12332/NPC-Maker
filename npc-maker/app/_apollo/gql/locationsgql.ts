import { gql } from "@apollo/client";

// mutations
export const DELETE_LOCATION_MUTATION = gql`
mutation DeleteLocation($id: String!) {
  deleteFromlocationCollection(filter: {id: {eq:$id}} atMost: 1){
    records {
      id
      title
    }
  }}
`;

export const UPDATE_LOCATION_MUTATION = gql`
mutation UpdateLocation($id: String!, $title: String!, $description: String!) {
  updatelocationCollection(filter: {id: {eq: $id}}, set: {title: $locationTitle, description: $locationDescription}) {
    records {
      id
      title
      description
    }
  }
}
`;

export const CREATE_LOCATION_MUTATION = gql`
mutation CreateLocation($title: String!, $description: String!) {
  insertIntolocationCollection(objects: [{project_id: $project_id title: $title description: $description}]){
    records {
      id
      title
      description
    }
  }
}
`;



// queries
export const GET_LOCATION = gql`
query GetLocation($id: String!) {
  projectsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        locationCollection(orderBy: {id: AscNullsLast}) {
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