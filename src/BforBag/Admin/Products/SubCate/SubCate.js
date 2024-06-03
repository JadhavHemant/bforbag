import React from 'react'
import Cate from './Cate.json'
import Cateimg from './user-1.png';
const SubCate = () => {
    console.log(Cate);

    const CateClick=()=>{
        alert('click')
    }
    return (
        <>
            <div className='p-2'>
                <div className="flex gap-5 items-center justify-center">
                    {Cate.map((d, k) => (
                            <div className='overflow-x-hidden'>
                        <div key={k} className="flex flex-col items-center p-2">
                            <img src={Cateimg} className="h-14 w-14 border border-black rounded-full" alt="Category" onClick={()=>CateClick()} />
                            <p className="mt-2 text-[12px]">{d.product_category}</p>
                        </div>
                </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SubCate