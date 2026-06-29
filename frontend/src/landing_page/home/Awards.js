import React from 'react'

function Awards() {
   return (
      <>
         <div className='container p-5'>
            <div className='row mt-5'>
               <div className='col-6'>
                  <img alt='brokers' src='\media\images\largestBroker.svg' />
               </div>
               <div className='col-6'>
                  <h1 className='mt-3'> Largest Stock Broker In India</h1>
                  <p>2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>

                  <div className='row mt-5 mb-2'>
                     <div className='col-6'>
                        <ul>
                           <li>futures and options</li>
                           <li> commodity derivatives</li>
                           <li>currency derivatives</li>
                        </ul>
                     </div>
                     <div className='col-6'>
                        <ul>
                           <li>Stocks and IPO</li>
                           <li>Direct Mutual Funds</li>
                           <li>Bonds and Goverment</li>
                        </ul>
                     </div>

                  </div>
                  <img src='media\images\pressLogos.png' style={{ width: "90%" }} alt='largest Brokers' />
               </div>
            </div>
         </div>
      </>
   );
}

export default Awards;