import { gql } from "@apollo/client";

// mutations
export const DELETE_LOCATION_MUTATION = gql`
mutation DeleteLocation($id: String!) {
  deleteFromlocationCollection(filter: {id: {eq:$id}} atMost: 1){
    records {
      id
      location_name
    }
  }}
`;

export const UPDATE_LOCATION_MUTATION = gql`
mutation UpdateLocation($id: String!, $location_name: String!, $description: String!) {
  updatelocationCollection(filter: {id: {eq: $id}}, set: {location_name: $location_name, description: $description}) {
    records {
      id
      location_name
      description
    }
  }
}
`;

export const CREATE_LOCATION_MUTATION = gql`
mutation CreateLocation($location_name: String!, $description: String!) {
  insertIntolocationCollection(objects: [{project_id: $project_id location_name: $location_name description: $description}]){
    records {
      id
      location_name
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
              location_name
              description
            }
          }
        }
      }
    }
  }
}
`;