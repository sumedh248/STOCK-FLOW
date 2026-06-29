import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import Pricing from './landing_page/pricing/PricingPage';
import Products from './landing_page/products/ProductsPage';
import Support from './landing_page/support/SupportPage';
import About from './landing_page/about/AboutPage';
import NavBar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Support' element={<Support/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
