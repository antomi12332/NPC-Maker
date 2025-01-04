import { gql } from "@apollo/client";

// mutations
export const DELETE_CULTURE_MUTATION = gql`
mutation DeleteCulture {
  deleteFromcultureCollection(filter: {id: {eq:$id}} atMost: 1){
    records {
      id
      title
    }
  }}
`;

export const CREATE_CULTURE_MUTATION = gql`
mutation CreateCulture($title: String!, $description: String!) {
  insertIntocultureCollection(objects: [{project_id: $project_id title: $title description: $description}]){
    records {
      id
      title
      description
    }
  }
}
`;



// queries
export const GET_CULTURES = gql`
query GetCultures {
  projectsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        cultureCollection(orderBy: {id: AscNullsLast}) {
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