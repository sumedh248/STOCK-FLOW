import React from 'react'

function Stats() {
   return (
      <>
         <div className='container mt-5 p-3'>
            <div className='row p-3'>
               <div className='col-6 p-5'>
                  <h1 className='fw-2'>Trust with Confidence</h1>

                  <h3 className='mt-5' className='fw-4'>Customore-First Always</h3>
                  <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+
                     lakh crores worth of equity investments.</p>
                  <h3 className='fw-4'>No spam or gimmicks</h3>
                  <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push
                     notifications. High quality apps that you use at your pace, the
                     way you like.</p>
                  <h3 className='fw-4'>The Zerodha Universe</h3>
                  <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in
                     30+ fintech startups offer you tailored services specific to
                     your needs.</p>
                  <h3 className='fw-4'>Do Better with Money</h3>
                  <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just
                     facilitate transactions, but actively help you do better with
                     your money..</p>

               </div>
               <div className='col-6 p-3'>
                  <img alt='excosystem' className='img-fluid' src='media\images\ecosystem.png' />
                  <div className='text-center' >
                     <a href='#' style={{textDecoration : "none"}} className='mx-5' >Explore Our Products <i class="fa-light fa-arrow-right-long"></i></a>
                     <a href='#' style={{textDecoration : "none"}}>Try kite <i class="fa-light fa-arrow-right-long"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Stats;