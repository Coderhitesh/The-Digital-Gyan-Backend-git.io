import React from 'react'
import './SearchPage.css'

function SearchPage() {
  return (
    <section className='searchPage-section'>
      <div className="container">
        <div className="heading">
            <span>Search</span>
        </div>
        <div className="search-box">
            <input type="text" placeholder='Search Here..' />
            <button>Search</button>
        </div>
      </div>
    </section>
  )
}

export default SearchPage
