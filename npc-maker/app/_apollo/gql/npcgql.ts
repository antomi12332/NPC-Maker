import { gql } from "@apollo/client";

// mutations
export const UPDATE_NPC_MUTATION = gql`
mutation UpdateNpc($id: String!, $npc_name: String!, $description: String!) {
  updatenpcsCollection(filter: {id: {eq: $id}}, set: {npc_name: $npc_name, description: $description, quest_id: $quest_id, location_id: $location_id, dialog: $dialog, culture_id: $culture_id, history_id: $history_id}) {
    records {
      id
      location_id {
        location_name
      }
      npc_name
      description
      dialog
      quest_id
      culture_id
      history_id
    }
  }
}
`;

export const DELETE_NPC_MUTATION = gql`
mutation DeleteNpc($id: String!) {
  deleteFromnpcsCollection(filter: {id: {eq:$id}} atMost: 1){
    records {
      id
      npc_name
    }
  }}
`;

export const CREATE_NPC_MUTATION = gql`
mutation CreateNpc($location_id: String!, $npc_name: String!, $description: String!) {
  insertIntonpcsCollection(objects: [{location_id: $location_id npc_name: $npc_name description: $description}]){
    records {
      id
      npc_name
      description
    }
  }
}
`;







// queries
export const GET_ALL = gql`
query GetAll($id: String!) {
  projectsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        locationCollection {
          edges {
            node {
              id
              location_name
              npcsCollection {
                edges {
                  node {
                    id
                    npc_name
                    description
                    dialog
                    quest_id
                    culture_id
                    history_id
                  }
                }
              }
            }
          }
        }
        questsCollection {
          edges {
            node {
              id
              title
            }
          }
        }
        cultureCollection {
          edges {
            node {
              id
              title
            }
          }
        }
        historyCollection {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
}
`;