import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { QUERY_SINGLE_ITEM } from '../utils/queries'

const SingleItem = () => {
    const { id } = useParams(); // the value passed into the route path "/:id"
    const { loading, data, error } = useQuery(QUERY_SINGLE_ITEM, {
        variables: { id }
    })

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <p>{data.item.description ? data.item.description : 'no description'}</p>
            <p>{data.item.name ? data.item.name : 'no name'}</p>
            <p>{data.item.image ? data.item.image : 'no image'}</p>
            <p>{data.item.price ? data.item.price : 'no price'}</p>
        </div>
    )
}

export default SingleItem
