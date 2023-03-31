import React from 'react';
import './Navigation.css';
import { NavLink, useNavigate } from 'react-router-dom';


function Navigation({isAuthenticated,toggleIsAuthenticated}){
    const navigate = useNavigate();

    function signOut(){
        toggleIsAuthenticated(false);
        navigate('/')
    }


    return(
        <nav>
              <ul>
                  <li>
                      <NavLink to="/">
                          Home
                      </NavLink>
                  </li>
                  {isAuthenticated === true
                      ? <>
                  <li> <NavLink to="/blogposts">
                      Blog Overzicht
                  </NavLink>
                  </li>
                  <li>
                      <button type ="button" onClick={signOut}>
                      Uitloggen
                  </button>
                  </li>
                  </>
                    :
                      <>
                      <li> <NavLink to="/login">
                          Login
                      </NavLink>
                      </li>
                      </>}
              </ul>
         </nav>
    );
}

export default  Navigation;