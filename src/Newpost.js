import React from 'react'
import { Link } from 'react-router-dom'

const Newpost = ({handlesubmit, posttitle, setposttitle, postbody, setpostbody}) => {
  return (
    <main className='NewPost'>
        <form className='newPostForm' onSubmit={handlesubmit}>
         <input className='postBody border-2'
                type="text" required
                id='title'
                placeholder='Title of blog'
                value={posttitle}
                onChange={(e)=>setposttitle(e.target.value)} 
                />
         <textarea  className='border-2'
                    required
                id='postbody'
                placeholder='Enter your blog'
                value={postbody}
                onChange={(e)=>setpostbody(e.target.value)} 
                />
          <button on>Submit</button>
        </form>
    </main>
  )
}

export default Newpost