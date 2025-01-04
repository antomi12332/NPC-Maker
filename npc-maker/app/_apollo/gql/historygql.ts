import { gql } from "@apollo/client";

export const GET_HISTORIES = gql`
query GetHistory {
  projectsCollection(filter: {id: {eq: "2ccf5a9b-e30d-4a22-b877-f50adc53c4ed"}}) {
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