import React from 'react';

function Team() {
   return (<>
      <div className='component p-5'>
         <div className='row border-top text-center pt-5'>
            <h3>People</h3>
         </div>
         <div className='row p-5 text-muted ' style={{ fontSize: '1.8', lineHeight: '1.2rem' }}>
            <div className='col-6 px-5 text-center'>
               <img src='media\images\nithinKamath.jpg' style={{ borderRadius: '50%', width: '60%' }} />
               <p className='fs-5 mt-3'>Nithin Kamath</p>
               <p className=' mt-3'>Founder CEO</p>
            </div>

            <div className='col-6 px-5'>
               <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome<br/>
               the hurdles he faced during his decade long stint as a trader.<br/>
               Today, Zerodha has changed the landscape of the Indian broking<br/>
               industry.</p>

               <p>He is a member of the SEBI Secondary Market Advisory<br/>
               Committee (SMAC) and the Market Data Advisory Committee<br/>
               (MDAC).</p>

               <p>Playing basketball is his zen.</p>

               <p>Connect on Homepage / TradingQnA / Twitter</p>
            </div>
         </div>
      </div>
   </>);
}

export default Team;