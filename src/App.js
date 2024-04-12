import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Trangchu from "./routes/Trangchu";
import Lythuyet from "./routes/Lythuyet";
import Onthi from "./routes/Onthi";
import Vechungtoi from "./routes/Vechungtoi";
import Login from "./components/Login";
import Tainguyen from "./routes/Tainguyen";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import Chapter1 from "./Chaper/Chapter1";
import Home from "./routes/Home";
function App() {
  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem('user'))
  
    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }
  
    // If the token exists, verify it with the auth server to see if it is valid
    fetch('http://localhost:3080/verify', {
      method: 'POST',
      headers: {
        'jwt-token': user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn('success' === r.message)
        setEmail(user.email || '')
      })
  }, [])
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  return (
    <div className="App">
    <Routes>
    <Route path='/Home' element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
    <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}/>
    <Route path='/' element={<Trangchu />}/>
    <Route path='/Chapter1' element={<Chapter1 />}/>
    <Route path='/Tainguyen' element={<Tainguyen />}/>
    <Route path='/Lythuyet' element={<Lythuyet/>}/>    
    <Route path='/Onthi' element={<Onthi/>}/>    
    <Route path='/Vechungtoi' element={<Vechungtoi/>}/>    
    </Routes>
  </div>
  );
}

export default App;
