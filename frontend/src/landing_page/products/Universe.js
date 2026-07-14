import React from 'react';

function Universe() {
   return ( 
      <>
         <div className='container  my-5'>
            <div className='row text-center'>
               
               <h1>The Zerodha Universe</h1>
               <p>Extend your trading and investment experience even further with our partner platforms</p>
                             
               <div className='col-4 text-small text-muted mt-5'>
                  <img src="media\images\smallcaseLogo.png" />
                  <p className="mt-3">Thematic investment platform</p>
               </div>

               <div className='col-4 text-small text-muted mt-5'>
                  <img src="media\images\streakLogo.png" style={{width:'35%'}} />
                  <p className="mt-3">Thematic investment platform</p>
               </div>

               <div className='col-4 text-small text-muted mt-5 pt-3'>
                  <img src="media\images\sensibullLogo.svg" style={{width:'40%'}} />
                  <p className="mt-3">Thematic investment platform</p>
               </div>

               <div className='col-4 text-small text-muted mt-3 '>
                  <img src="media\images\zerodhafundhouse.png" style={{width:'45%'}} />
                  <p className="mt-3">Thematic investment platform</p>
               </div>

               <div className='col-4 text-small text-muted mt-4'>
                  <img src="media\images\goldenpilogo.png" />
                  <p className="mt-3">Thematic investment platform</p>
               </div>

               <div className='col-4 text-small text-muted mt-3'>
                  <img src="media\images\dittologo.png" style={{width:'30%'}} />
                  <p className="mt-3">Thematic investment platform</p>
               </div>

               <div className='text-center mt-3'>
                  <a className='btn btn-primary' >Sign Up Now</a>
               </div>
               
            </div>
         </div>
      </>
    );
}

export default Universe;