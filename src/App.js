import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import BlogPost from './pages/blogpost/BlogPost';
import BlogpostOverview from './pages/blogpostOverview/BlogpostOverview';
import Navigation from './components/navigation/Navigation';
import {Routes, Route, Navigate} from 'react-router-dom';


function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (

      <div>

        <Navigation isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "/login" element={<Login toggleIsAuthenticated={toggleIsAuthenticated}/>}/>
            <Route path = "/blogposts" element={isAuthenticated === true ? <BlogpostOverview/> : <Navigate to ="/Login"/>}/>
            <Route path ="/blogposts/:blogId" element={isAuthenticated ===true ? <BlogPost/> : <Navigate to="/Login"/>}/>
        </Routes>
          {console.log(isAuthenticated)}
    </div>

  );
}


export default App;