import React from 'react';

function LeftSection({ imgSrc, title, description, tryDemo, learnMore, googlePlay, appStore }) {
   return (

      <>
         <div className='container  my-5'>
            <div className='row'>
               <div className='col-6 p-3'>
                  <img src={imgSrc} />
               </div>
               <div className='col-6 mt-5'>
                  <h1>{title}</h1>
                  <p className='text-muted'>{description}</p>
                  <div className='my-3'>
                     <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-light fa-arrow-right-long"></i></a>
                     <a href={learnMore} className='mx-3' style={{ textDecoration: "none" }}>Learn More <i class="fa-light fa-arrow-right-long"></i></a>
                  </div>
                  <div className='mb-5'>
                     <a href={googlePlay} ><img src='media\images\googlePlayBadge.svg' /></a>
                     <a href={appStore} className='mx-3' ><img src='media\images\appstoreBadge.svg' /></a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default LeftSection;