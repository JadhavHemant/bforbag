import React from 'react'
import logo from './images/image1.png'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import LatestProducts from './Latest Products/LatestProducts'
import Exclusive from './Exclusive/Exclusive'
const Home = () => {
    const Explore = () => {
        alert('Explore ')
    }
    return (
        <>
            <div className='h-auto '>
                <div className='grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 font-[Poppins]'>
                    <div className='md:grid-flow-row p-6 lg:pt-[200px] '>
                        <h1 className='text-[40px]  text-transparent bg-clip-text bg-[black] font-bold lg:text-[60px] '>Best Sellers<br /></h1>
                        <p className='pt-3  lg:text-[20px] font-bold'>Shop American Tourister's best-sellers online. Discover the most<br /> popular, top-rated travel gear handpicked by American Tourister fans!.</p>
                        <div className='pt-4 lg:pt-8'>
                            <div className=' inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[20px] group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                                <button className=' px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[20px] group-hover:bg-opacity-0' onClick={() => Explore()}>Explore Now &#8594;</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:grid-flow-row p-4'>
                        <div>
                            <img src={logo} alt="name" className='' />
                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <FeaturedProducts/>
                    <LatestProducts />
                </div>
                <div>
                    <Exclusive />
                </div>
            </div>
        </>
    )
}

export default Home