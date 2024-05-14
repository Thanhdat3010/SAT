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
import Profile from "./routes/Profile";
import FLashcard from "./routes/Flashcard";
import Chapter2 from "./Chapter2/Chapter2";
import Chapter3 from "./Chapter3/Chapter3";
import Chapter4 from "./Chapter4/Chapter4";
import AI from "./components/AI";
import Post from "./Blog/Post";
import { BackgroundProvider } from "./components/BackgroundContext";
function App() {
  useEffect(() => {
    // Tìm nạp email và mã thông báo của người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem('user'))
  
    // Nếu token/email không tồn tại, đánh dấu người dùng là đã đăng xuất
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }
  
    // Nếu token tồn tại, hãy xác minh nó với máy chủ xác thực để xem nó có hợp lệ không
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
    <BackgroundProvider>
    <div className="App">
    <Routes>
    <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}/>
    <Route path='/' element={<Trangchu />}/>
    <Route path='/Profile' element={<Profile />}/>
    <Route path='/Flashcard' element={<FLashcard />}/>

    <Route path='/Chapter1' element={<Chapter1 />}/>
    <Route path='/Chapter2' element={<Chapter2 />}/>
    <Route path='/Chapter3' element={<Chapter3 />}/>
    <Route path='/Chapter4' element={<Chapter4/>}/>
    <Route path='/Tainguyen' element={<Tainguyen />}/>
    <Route path='/Lythuyet' element={<Lythuyet/>}/>    
    <Route path='/Onthi' element={<Onthi/>}/>    
    <Route path='/Vechungtoi' element={<Vechungtoi/>}/>    
    <Route path="/post/:id" element={<Post />} />

    </Routes>
  </div>
  </BackgroundProvider>

  );
}

export default App;
