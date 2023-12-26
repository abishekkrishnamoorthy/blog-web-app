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


function App() {
  const url="http://localhost:5000/post"
  const [search,setsearch]=useState('')
  const [post,setpost]=useState([])
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
 
  return (    
    <div className="App">
     
      <Header title={"blog"}/>
      <Nav search={search}
           setsearch={setsearch}
           />
       <Routes>
      <Route path="/home" element={<Home post={post}/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
