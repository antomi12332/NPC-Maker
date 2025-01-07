import { gql } from "@apollo/client";

// mutations
export const UPDATE_NPC_MUTATION = gql`
mutation UpdateNpc($id: String!, $npc_name: String!, $description: String!) {
  updatenpcsCollection(filter: {id: {eq: $id}}, set: {npc_name: $npc_name, description: $description, quest_id: $quest_id, location_id: $location_id, dialog: $dialog}) {
    records {
      id
      npc_name
      description
      quest_id
      location_id
      dialog
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
