import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function NavBar() {

   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const checkLogin = async () => {
         try {
            const { data } = await axios.get("http://localhost:3002/isloggedin", {
               withCredentials: true,
            });
            setIsLoggedIn(data.loggedIn);
         } catch (error) {
            // A 401 simply means this visitor is not logged in.
            setIsLoggedIn(false);
         }
      };

      checkLogin();
      window.addEventListener("authchange", checkLogin);

      return () => window.removeEventListener("authchange", checkLogin);
   }, []);

   const handleLogout = async () => {
      try {
         await axios.post("http://localhost:3002/logout", {}, {
            withCredentials: true,
         });
      } catch (error) {
         console.error("Unable to log out:", error);
      } finally {
         setIsLoggedIn(false);
         window.dispatchEvent(new Event("authchange"));
      }
   };


   return (<>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container p-2">
            <Link className="navbar-brand" to="/">
               <img src='media/images/logo.svg' alt='stock-flow' style={{ width: "25%" }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/About">about</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/Support">support</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/Products">product</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/Pricing">pricing</Link>
                  </li>

                  {isLoggedIn ? (
                     <li className="nav-item">
                        <button className="nav-link active btn btn-link" aria-current="page" type="button" onClick={handleLogout}>LogOut</button>
                     </li>
                  ) : (
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                     </li>
                  )}

               </ul>
               <form className="d-flex" role="search">
               </form>
            </div>
         </div>
      </nav>
   </>
   );
}

export default NavBar;
