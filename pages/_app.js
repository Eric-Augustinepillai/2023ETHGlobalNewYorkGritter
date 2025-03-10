import { useEffect } from 'react';
import React from 'react';

import { BrowserRouter } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
      <NavBar/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/x" element={<x/>}/>
        <Route path="/y" element={<y/>}/>
        <Route path="/z" element={<z/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </div>
    
  )
}

export default MyApp;
