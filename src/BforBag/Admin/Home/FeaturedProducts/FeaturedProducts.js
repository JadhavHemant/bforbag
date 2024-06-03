import React from 'react'
import Product1 from '../images/category-1.jpg'
import Product2 from '../images/category-2.jpg'
import Product3 from '../images/category-3.jpg'

const FeaturedProducts = () => {
    return (
        <>
            <div className='text-[30px] text-center font-bold p-4 '>                
                Launching Soon
            <hr class="mx-auto w-40 h-2 bg-orange-500 border rounded-xl " />
            </div>
            <div className='grid grid-cols-3 md:grid-cols-3 gap-5 max-w-auto lg:p-[100px]'>
                <div className='md:grid-flow-row   border-black  border-[2px]'>
                    <img src={Product1} alt="name" className='border' />
                    <div className='pl-2 p-2'>
                        <p>product name</p>
                        <p>Price</p>
                    </div>
                </div>
                <div className='md:grid-flow-row  border-black border-[2px]'>
                    <img src={Product2} alt="name" className='border ' />
                    <div className='pl-2 p-2'>
                        <p>product name</p>
                        <p>Price</p>
                    </div>
                </div>
                <div className='md:grid-flow-row border-[2px] border-black'>
                    <img src={Product3} alt="name" className='border' />
                    <div className='pl-2 p-2'>
                        <p>product name</p>
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts