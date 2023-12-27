import React from 'react'
import {  Link } from "react-router-dom";


const Nav = ({search,setsearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm ' onSubmit={(e)=>e.preventDefault()}>
        <input type="text"
               id='search'
               placeholder='search post'
               value={search}
               onChange={(e)=> setsearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/newpost">post</Link></li>
      </ul>
    </nav>
  )
}

export default Nav