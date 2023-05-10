import Header from '@/app/components/Header'
import NavBar from '@/app/components/NavBar'
import React from 'react'
import RestaurantNavbar from '../components/RestaurantNavbar'
import Menu from '../components/Menu'

const RestaurantMenu = () => {
    return (
        <>
            <div className="bg-white w-[100%] rounded p-3 shadow">
                <RestaurantNavbar />
                <Menu />
            </div>
        </>

    )
}

export default RestaurantMenu