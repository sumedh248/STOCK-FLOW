import React from 'react';
import Hero from '../products/Hero';
import LeftSection from '../products/LeftSection';
import RightSection from '../products/RightSection';
import Universe from '../products/Universe';

function ProductsPage() {
   return (
      <>
         <Hero />
         <LeftSection imgSrc='media/images/kite.png' title='Kite' description='Our ultra-fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='' appStore='' />
         <RightSection imgSrc='media/images/console.png' title='Console' description='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' learnMore='' />
         <LeftSection imgSrc='media/images/coin.png' title='Coin' description='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='' appStore='' />
         <RightSection imgSrc='media/images/kiteconnect.png' title='Kite Connect API' description='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase..' learnMore='' />
         <LeftSection imgSrc='media/images/varsity.png' title='VarsityMobile' description='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards  to help you learn on the go.' tryDemo='' learnMore='' googlePlay='' appStore='' />
         <Universe />
      </>
   );
}

export default ProductsPage;