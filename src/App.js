import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import BlogPost from './pages/blogpost/BlogPost';
import BlogpostOverview from './pages/blogpostOverview/BlogpostOverview';
import Navigation from './components/navigation/Navigation';
import {Routes, Route, Navigate} from 'react-router-dom';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    //bij de navigatie moet nog wat, maar dat snap ik niet. isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}
      <div>

        <Navigation/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/blogposts" element={isAuthenticated === true ? <BlogpostOverview/> : <Navigate to ="/Login"/>}/>
            <Route path ="/blogposts/:blogId" element={isAuthenticated ===true ? <BlogPost/> : <Navigate to="/Login"/>}/>
        </Routes>
    </div>
  );
}


export default App;