import React from 'react';

function Hero() {
   return (
      <>
         <div className='container'>
            <div className='row text-center border-bottom my-5 '>
               <h1>Pricing</h1>
               <p className='text-muted mt-3 pb-3'>Free equity investments and flat ₹20 traday and F&O trades</p>
            </div>

            <div className='container'>
               <div className='row text-center my-5 '>
                  <div className='col-4 px-5'>
                     <img src='media\images\pricing0.svg'/>
                     <h2>Free Equity Delivery</h2>
                     <p>All equity delivery investments (NSE, BSE), are absolutely free - ₹ 0 brokerage.</p>
                  </div>

                  <div className='col-4 px-5'>
                     <img src='media\images\intradaytrades.svg'/>
                     <h2>Free Equity Delivery</h2>
                     <p>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades..</p>
                  </div>

                  <div className='col-4 px-5'>
                     <img src='media\images\pricing0.svg'/>
                     <h2>Free Equity Delivery</h2>
                     <p>All equity delivery investments (NSE, BSE), are absolutely free - ₹ 0 brokerage.</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Hero;