import { gql } from "@apollo/client";

// Mutations
export const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($name: String!, $description: String!) {
    insertIntoprojectsCollection(objects: [{ project_name: $name, short_description: $description }]) {
      records { 
        background
        created_at
        id
        modified_at
        project_id
        project_name
        short_description
        user_id
        }
    }
  }
`;

export const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProject($id: ID!) {
    deleteFromprojectsCollection(
      filter: { id: { eq: $id } }
      atMost: 1
      ) {
      records {
        background
        created_at
        id
        modified_at
        project_id
        project_name
        short_description
        user_id
      }
    }
  }
`;

export const SAVE_BACKGROUND_MUTATION = gql`
mutation UpdateBackground($id: ID!, $background: String!) {
  updateprojectsCollection(
    set: {background: $background}
    filter: {id: {eq: $id}}
    atMost: 1
  ) {
    records {
        background
        created_at
        id
        modified_at
        project_id
        project_name
        short_description
        user_id
    }
  }
}
`;

export const SAVE_NAME_MUTATION = gql`
mutation UpdateProjectName($id: ID!, $project_name: String!) {
  updateprojectsCollection(
    set: {project_name: $project_name}
    filter: {id: {eq: $id}}
    atMost: 1
  ) {
    records {
        background
        created_at
        id
        modified_at
        project_id
        project_name
        short_description
        user_id
    }
  }
}
`;



// Queries
export const ALL_PROJECTS_QUERY = gql`
  query GetProjects($id: String!) {
      projectsCollection(orderBy: {project_id: AscNullsLast}) {
      edges {
        node {
          background
          created_at
          id
          modified_at
          project_id
          project_name
          short_description
          user_id
        }
      }
    }
  }
`;

export const CURRENT_PROJECT = gql`
  query CurrentProject($id: String!) {
    projectsCollection (filter: {id: {eq: $id}}) {
    edges {
      node {
        background
        created_at
        id
        modified_at
        project_id
        project_name
        short_description
        user_id
      }
    }
  }
}`;