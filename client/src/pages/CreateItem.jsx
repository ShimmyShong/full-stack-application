import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_ITEM } from '../utils/mutations'

const CreateItem = () => {
    const [formError, setFormError] = useState('\u00A0')
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
    })
    const [addNewItem, { loadingNewItem, errorNewItem }] = useMutation(CREATE_ITEM);

    const handleItemSubmit = async () => {
        try {
            await addNewItem({
                variables: { ...formData, price: parseFloat(formData.price) }
            })
            setFormError('\u00A0');
        } catch (err) {
            console.error(err)
            setFormError('Please enter a valid number!');
        }
    }

    const handleInputChange = (event) => {

        let value = event.target.value;

        setFormData({
            ...formData,
            [event.target.name]: value
        })
    }

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form class="w-full max-w-sm border rounded-lg border-teal-500 p-12">
                <div class="flex items-center border-b border-teal-500 py-2">
                    <input onChange={handleInputChange} value={formData.name} name='name' class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Item Name" aria-label="Full name" />
                </div>
                <div class="flex items-center border-b border-teal-500 py-2">
                    <input onChange={handleInputChange} value={formData.description} name='description' class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Item Description" aria-label="Full name" />
                </div>
                <div class="flex items-center border-b border-teal-500 py-2">
                    <input onChange={handleInputChange} value={formData.price} name='price' class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Item Price" aria-label="Full name" />
                </div>
                <div class="flex items-center border-b border-teal-500 py-2">
                    <input onChange={handleInputChange} value={formData.image} name='image' class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Item Image" aria-label="Full name" />
                </div>
                <div class="flex items-center pt-6">
                    <button onClick={handleItemSubmit} class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Sign Up
                    </button>
                    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                        Cancel
                    </button>
                </div>
                <h2>{formError}</h2>
            </form>
        </div>
    )
}

export default CreateItem
