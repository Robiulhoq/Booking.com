import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import './Home.css';
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home