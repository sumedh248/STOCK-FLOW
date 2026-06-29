import React from 'react'
import {Link} from 'react-router-dom';

function Hero() {
   return (<div className='container p-5'>

      <div class="row mb-5">
         <div class="col text-center">
            <img src='media/images/homeHero.png' className='img-fluid mb-5' alt='Hero-img' ></img>
            <h1>Invest In Everything</h1>
            <p>Online platform to invest in stocks, derivation, mutual funds.</p>
            <Link to='/signup' className='btn btn-primary'>SignUp Here</Link>
         </div>
      </div>
   </div>
   );
}
export default Hero;
