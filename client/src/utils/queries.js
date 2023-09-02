import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
query QUERY_ITEMS {
    items {
        name
        description
        price
        id
    }
}
`

export const QUERY_SINGLE_ITEM = gql`
query QUERY_SINGLE_ITEM ($id: ID!) {
        item(id: $id) {
        description
        image
        name
        price
    }
}
`