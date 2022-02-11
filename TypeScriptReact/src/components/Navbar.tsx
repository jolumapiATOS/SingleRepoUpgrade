import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Navbar:any = (props: any) => {
    const [ status, setStatus ] = useState("Connecting");

    useEffect(()=>{
        if(navigator.onLine) {
            setStatus("Online")
        } else {
            setStatus("Offline")
        }
    }, []);
    
    return ( 
        <nav id="navbar-for-real" className="navbar navbar-expand-lg navbar-dark">
            <div  id="navbar-for-real" className="container-fluid">
                <p data-testid="testing-navbar" className="paragraph"> JLMP | App | { props.online }  </p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  mx-5" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/posts"> posts </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/entry"> new entry </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link-for-navbar" to="/entries"> entries </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;