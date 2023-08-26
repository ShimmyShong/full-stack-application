import React, { useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../utils/queries';

const Main = () => {
    const { loading, data } = useQuery(QUERY_ITEMS);
    const itemNames = data?.name || [];

    useEffect(() => {
        console.log(data)
        console.log(itemNames)
    }, [])

    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <ItemCard />

                    {/* <!-- More products... --> */}
                </div>
            </div>
        </div>
    )
}

export default Main
