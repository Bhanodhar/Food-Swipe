import React from 'react'

const TopBar = () => {
  return (
    <section className='topBarSection'>
      <div className='companyTitle'>
        <h2>Food Swipe</h2>
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
