import React from 'react';

function RightSection({title, description, learnMore, imgSrc }) {
   return (
      <>
         <div className='container  '>
            <div className='row'>

               <div className='col-6 mt-5'>
                  <h1>{title}</h1>
                  <p className='text-muted'>{description}</p>
                  <div className='my-3'>
                     <a href={learnMore} className='mx-3' style={{ textDecoration: "none" }}>Learn More <i class="fa-light fa-arrow-right-long"></i></a>
                  </div>                
               </div>
               
               <div className='col-6 '>
                  <img src={imgSrc} />
               </div>
            </div>
         </div>
      </>
   );
}

export default RightSection;