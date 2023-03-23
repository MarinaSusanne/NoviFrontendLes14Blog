import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation(){
    return(
        <nav>
            <div className="nav-container">
              <ul>
                  <li><NavLink to={"/"}> Home </NavLink> </li>
                  <li> <NavLink to={"/login"}> Login </NavLink> </li>
                  <li> <NavLink to={"/blogposts"}>Blog overzicht </NavLink> </li>
              </ul>
            </div>
        </nav>
    )
}

export default class Navigation;