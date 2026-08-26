import { React, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

function Login() {
      console.log("entered");
    const navigate = useNavigate();
      const [emailId, setEmailId] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async (event) => {
            event.preventDefault();
            try {
                  const { data } = await axios.post('http://localhost:3002/login', {
                        email: emailId,
                        password: password,
                  }, {
                        withCredentials: true,
                  })

                  const { success, message } = data;
                  if (success) {
                        toast.success(message, {
                              position: "bottom-left", autoClose: 3000
                        });
                        window.dispatchEvent(new Event("authchange"));
                        navigate("/");
                  } else {
                        toast.error(message, {
                              position: "bottom-left", autoClose: 3000
                        });
                  }

            } catch (error) {
                  toast.error(error.response?.data?.message || "Unable to login your account.", {
                        position: "bottom-left", autoClose: 3000
                  });
            }
      };

   return(
      <>
          <div className=' border p-5 m-5 mx-auto shadow rounded-3' style={{ width: '40%' }}>
                        <form onSubmit={handleLogin}>
                              <h1 className='text-center'>Login an Account</h1>
                              <p className='text-center py-3'>Simple . Invest . Grow</p>
                              <h5>Email</h5>
                              <input className='inputt mb-3' type='email' value={emailId} name='emailid' onChange={(e) => { setEmailId(e.target.value) }} placeholder='enter your email' />

                              <h5>Password</h5>
                              <input className='inputt' type='Password' name='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter your Password' />
                              <button className='btn btn-success my-5' style={{ width: "100%" }} type="submit">Login Account</button><br />
                              <div className='text-center ' >
                                    <p>Dont have an account? <Link to={"/signUp"}>SignUp</Link></p>
                              </div>
                        </form>
                        <ToastContainer />
                  </div >
      </>
   )
}

export default Login;
