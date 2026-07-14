import React from 'react';

function Hero() {
   return (
      <>

         <section className='container-fluid ' id='support-hero'>
            <div id='support-hero2'>
               <h5>Support Portal</h5>
               <a href=''>Track Tickets</a>
            </div>
            <div className='row'>
               <div className='col-6 py-5'>
                  <h3 className='text-white fs-3'>Search for an answer or browse help topics to create a ticket</h3>
                  <input className='my-3' placeholder='Eg: how do i activate F&O, why is my order getting rejected ..' /> <br />
                  <a href=''> Track account opening </a>
                  <a href=''> Track segment activation </a>
                  <a href=''> Intraday </a>
                  <a href=''>  margins</a>
                  <a href=''> Kite user manual</a>
               </div>
               <div className='col-6 py-5 p-5'>
                  <h3 className='text-white fs-3'>Featured</h3>
                  <ol>
                     <li> <a href=''>Current Takeovers and Delisting - January 2024 </a> </li>

                     <li> <a href=''>Latest Intraday leverages - MIS & CQ </a> </li>
                  </ol>
               </div>
            </div>
         </section>
      </>
   );
}

export default Hero;