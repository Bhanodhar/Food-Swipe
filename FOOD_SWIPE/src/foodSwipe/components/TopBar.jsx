import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className='topBarSection'>
      <div className='companyTitle'>
        <Link to='/' className='link'>
          <h2>Food Swipe</h2>
        </Link>
        
      </div>
      <div className='searchBar'>
        <input type='text' placeholder='Search for restaurants or cuisines' />
      </div>
      <div className='userAuth'>
        Login/Signup 
      </div>
    </section>
  )
}

export default TopBar
