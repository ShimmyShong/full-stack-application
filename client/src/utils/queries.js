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

export const CREATE_ITEM = gql`
    query CREATE_ITEM ($name: String!, $description: String, $price: Float!, $image: String) {
        item(name: $name, description: $description, price: $price, image: $image) {
            name
            description
            price
            image
            id
        }
    }
`