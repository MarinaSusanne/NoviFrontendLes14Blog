import React from 'react';
import {useNavigate} from "react-router-dom";

function Login ({toggleIsAuthenticated}) {
    const navigate = useNavigate();

     function signIn(){
         toggleIsAuthenticated (true);
         navigate ("/");

     }

    return(
        <section>
            <h2> Login Pagina </h2>
            <p> Druk op de kop om in te loggen!</p>
            <button type="button" onClick={signIn}>
                Inloggen
            </button>
        </section>


    )

}
export default  Login;