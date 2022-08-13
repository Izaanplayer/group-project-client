import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import DisplayEvents from './DisplayEvents'

export const Events = () => {
    return (
        <>
            <div>
                <SearchBar />
            </div>
            <div className="w-max mt-6">
                <DisplayEvents />
            </div>
        </>
    )
}

