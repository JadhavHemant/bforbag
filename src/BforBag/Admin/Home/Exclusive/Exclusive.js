import React from 'react'
import exclu from '../images/exclusive.png';
const Exclusive = () => {
    return (
        <>
            <div className='pt-[50px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 font-[Poppins]'>
                    <div className='md:grid-flow-row p-8'>
                        <img src={exclu} alt='imaged' />
                    </div>
                    <div className='md:grid-flow-row p-4 text-center content-center'>
                        <h1> <span className='font-bold lg:text-[64px] text-[32px]'>Smart Band 4</span>
                            <br />
                            <span className='text-bold lg:text-[20px] font-bold'> The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exclusive