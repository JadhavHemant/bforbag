import React from 'react';
import Cate from './Cate.json';
import Cateimg from './user-1.png';

const SubCate = () => {
    console.log(Cate);

    const CateClick = () => {
        alert('click');
    };

    return (
        <>
            <div className='p-2'>
                <div className="overflow-x-auto">
                    <div className="pl-4 flex gap-3 items-center">
                        {Cate.map((d, k) => (
                            <div key={k} className='flex-shrink-0 flex flex-col items-center p-2'>
                                <img 
                                    src={Cateimg} 
                                    className="h-[50px] w-[50px] border border-black md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] rounded-full" 
                                    alt="Category" 
                                    onClick={() => CateClick()} 
                                />
                                <p className="mt-2 text-[12px] md:text-[14px] lg:text-[16px]">{d.product_category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubCate;
