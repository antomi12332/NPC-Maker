import { gql } from "@apollo/client";

// Query to get all token packs
export const GET_TOKEN_PACKS = gql`
query GetTokenPacks {
  token_packsCollection {
    edges {
      node {
        id
        pack_name
        price
        token_amount
      }
    }
  }
}
`;