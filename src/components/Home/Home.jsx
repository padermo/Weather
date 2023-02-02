import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar viewSearchbar={true}/>
      <div className="home__cards">
        <Cards/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home