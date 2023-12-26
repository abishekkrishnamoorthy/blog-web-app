import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Postpage from './Postpage'
import Feed from './Feed'

const Home = ({post}) => {
   
  return (
    <main className='Home'>
    <Feed post={post}/>
    </main>
    
  )
}

export default Home