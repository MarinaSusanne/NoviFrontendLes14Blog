import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blogpost from './pages/blogpost/Blogpost';
import BlogpostOverview from './pages/blogpostOverview/BlogpostOverview';
import Navigation from './components/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  // const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/blogposts" element={<BlogpostOverview/>}/>
            <Route path ="/blogposts/:blogId" element={ <Blogpost/>}/>
        </Routes>
    </div>
  );
}

export default App;