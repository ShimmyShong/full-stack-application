import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
query QUERY_ITEMS {
    items {
        name
    }
}
`