import { Route,  Routes, Link } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import Post from "./Post";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api_req from "./api_req";



function App() {
  const url="http://localhost:5000/post"
  const [search,setsearch]=useState('')
  const [post,setpost]=useState([])
  const [postbody,setpostbody]=useState([])
  const [posttitle,setposttitle]=useState([])

  const [feterr,setfeterr]=useState(null)
  const [searchresult,setsearchresult]=useState([])
  useEffect(()=>{
      const fetch_data=async ()=>{
        try {
        const res= await fetch(url);
        if( !res.ok ) throw Error ("error")
        const newpost = await res.json()
        setpost(newpost)
        } catch (error) {
          setfeterr(error.message)
        }
      }
       fetch_data()
  },[])
  
  useEffect(()=>{
    const filteredresult= post.filter(item => ((item.title)?.toLowerCase())?.includes(search?.toLowerCase()) || ((item.body)?.toLowerCase())?.includes(search?.toLowerCase()))
    setsearchresult(filteredresult.reverse())
},[post,search])

  const handlesubmit= async(e)=>{
    e.preventDefault()
    const id= post.length ? post[post.length-1].id+1:1
    const datetime= format(new Date(), 'MMM dd, yyyy pp')
    const newpost={id, title: posttitle, datetime, body: postbody}
    const allpost=[...post,newpost]
    setpost(allpost)
    setpostbody('')
    setposttitle('')
    const postoption={
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newpost)
    }
    const result=await api_req(url,postoption)
    if(result) setfeterr(result)
  } 
 
  return (    
    <div className="App">
      <Header title={"blog"}/>
      <Nav search={search}
           setsearch={setsearch}
           />
       <Routes>
      <Route path="/home" element={<Home post={searchresult}/>}/>
      <Route  path="/newpost" element={<Newpost post={post}
                                                postbody={postbody}
                                                posttitle={posttitle}
                                                setpostbody={setpostbody}
                                                setposttitle={setposttitle}
                                                handlesubmit={handlesubmit}/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
