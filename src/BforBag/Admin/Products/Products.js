import React, { useState } from 'react';
import productsData from './Products.json';
import imgdata from './images/product-1.jpg';
import SubCate from './SubCate/SubCate';
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div >
       <SubCate/>
      </div>
      {/*  */}
      <div className='md:p-4 lg:p-3  p-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4  max-w-auto lg:p-[50px] '>
          {
            currentProducts.map((d, k) => (
              <div className='md:grid-flow-row border border-black bg-white'>
                <>
                  <div className='flex justify-center'>
                    <img src={imgdata} alt="name"/>
                  </div>
                  <div className='pt-2 p-2'>
                    <h1 className='font-bold'>{d.product_name}</h1>
                    <h1 className='font-bold'>{d.product_price}</h1>
                    <h1 className='font-bold'>{d.product_description}</h1>
                  </div>
                </>
              </div>
            ))
          }
        </div>
      </div>

      {/*  */}
      <div className='flex justify-center pb-4'>
        <button
          className={`bg-[orange] p-2 mr-2 h-[40px] w-[40px] hover:bg-[#53f4ff] ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: Math.ceil(productsData.length / productsPerPage) }, (_, i) => {
          if (i === currentPage - 1 || i === currentPage - 2 || i === currentPage || i === currentPage + 1 || i === currentPage + 2) {
            return (
              <button key={i} onClick={() => paginate(i + 1)} className={`bg-[orange] p-2 mr-2 h-[40px] w-[40px] hover:bg-[#53f4ff] ${i + 1 === currentPage ? 'bg-[#53f4ff]' : ''}`}>
                {i + 1}
              </button>
            );
          } else if (i === currentPage - 3 || i === currentPage + 3) {
            return (
              <span key={i}></span>
            );
          }
          return null;
        })}

        <button className={`bg-[orange] p-2 mr-2 h-[40px] w-[40px] hover:bg-[#53f4ff] ${currentPage === Math.ceil(productsData.length / productsPerPage) ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => paginate(currentPage + 1)}disabled={currentPage === Math.ceil(productsData.length / productsPerPage)}>&gt;</button>
      </div>


    </>
  );
};

export default Products;
