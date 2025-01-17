import { gql } from "@apollo/client";

// mutations
export const DELETE_QUESTS_MUTATION = gql`
mutation DeleteQuests($id: String!) {
  deleteFromquestsCollection(filter: {id: {eq:$id}} atMost: 1){
    records {
      id
      title
    }
  }}
`;

export const UPDATE_QUESTS_MUTATION = gql`
mutation UpdateQuests($id: String!, $title: String!, $objective: String!, $reward: String!) {
  updatequestsCollection(filter: {id: {eq: $id}}, set: {title: $title, objective: $objective, reward: $reward}) {
    records {
      id
      title
      objective
      reward
    }
  }
}
`;

export const CREATE_QUESTS_MUTATION = gql`
mutation CreateQuests($title: String!, $objective: String! $reward: String! $project_id: String!) {
  insertIntoquestsCollection(objects: [{project_id: $project_id title: $title objective: $objective reward: $reward}]) {
    records {
      id
      title
      objective
      reward
    }
  }
}
`;



// queries
export const GET_QUESTS = gql`
query GetQuests($id: String!) {
  projectsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        questsCollection(orderBy: {id: AscNullsLast}) {
          edges {
            node {
              id
              title
              objective
              reward
            }
          }
        }
      }
    }
  }
}
`;