import { gql } from "@apollo/client";

export const UPDATE_ACCOUNT = gql`
mutation UpdateAccount {
    updateuser_accountCollection (set: {display_name: $display_name email: $email}) {
        records {
            display_name
            email
        }
    }
}
`;

export const CREATE_ACCOUNT = gql`
mutation CreateAccount($display_name: String!, $email: String!) {
    insertIntouser_accountCollection (objects: [{display_name: $display_name email: $email}]) {
        records {
            display_name
            email
        }
    }
}
`;

export const GET_ACCOUNT = gql`
query GetAccounts {
    user_accountCollection {
        edges{
            node{
                user_id
                display_name
                email
                tokens
            }
        }
    }
}
`;