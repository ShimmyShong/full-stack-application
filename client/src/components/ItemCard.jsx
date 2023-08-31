import React from 'react'

const ItemCard = ({ name, description, price }) => {
    return (
        <div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t border-gray-400 lg:border lg:border-gray-400 lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('http://via.placeholder.com/500x360')" }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
