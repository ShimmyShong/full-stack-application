import { gql } from '@apollo/client';

export const CREATE_ITEM = gql`
    mutation CREATE_ITEM ($name: String!, $description: String, $price: Float!, $image: String) {
        addItem(name: $name, description: $description, price: $price, image: $image) {
            name
            description
            price
            image
            id
        }
    }
`