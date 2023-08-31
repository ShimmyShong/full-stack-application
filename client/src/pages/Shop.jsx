import React, { useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../utils/queries';

const Shop = () => {
    const { loading, error, data } = useQuery(QUERY_ITEMS);

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <>
            <div className='shop'>
                <h1 className='flex justify-center items-center font-bold text-4xl mt-8'>Shop</h1>
                <div className='flex'>
                    {data.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                        <ItemCard name={item.name} description={item.description} price={item.price} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>

    )
}

export default Shop
