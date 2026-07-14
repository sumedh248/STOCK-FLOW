import React from 'react';

function Brokerage() {
   return (
      <>
         <div className='container border-top'>
            <div className='row  my-5 '>
               <div className='col-8 '>
                  <a style={{ textDecoration: 'none' }} className=' text-center' href=''><h5>Brokerage Calculator</h5></a>
                  <ul className='text-muted'>
                     <li className='pt-3'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>

                     <li className='pt-3'>Digital contract notes will be sent via e-mail.</li>

                     <li className='pt-3'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>

                     <li className='pt-3'> For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>

                     <li className='pt-3'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>

                     <li className='pt-3'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                  </ul>
               </div>
               <div className='col-4 text-center'>
                  <a style={{ textDecoration: 'none' }} href=''><h5>List of Charges</h5></a>
               </div>

            </div>
         </div>
      </>
   );
}

export default Brokerage;