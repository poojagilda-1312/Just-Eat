import React, { useState } from 'react'
import ItemsList from './ItemsList'
const RestaurantCategories = ({ data, showItem ,setShowIndex}) => {

    // const [showItem,SetShowItem] = useState(false)
    const handleClick =()=>{
              setShowIndex()
    }
    return (
        <div className='w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 '>

            {/* header */}
            <div className='flex justify-between cursor-pointer'   onClick= {handleClick} >
                <span> {data.title}({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/* Accordion body */}
        

              {   showItem &&  <ItemsList items={data.itemCards}></ItemsList> }

        </div>
    )
}
export default RestaurantCategories;