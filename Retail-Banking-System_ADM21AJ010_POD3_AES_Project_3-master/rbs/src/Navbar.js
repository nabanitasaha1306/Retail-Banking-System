import pillar from './pillar.jpg';
import React from 'react';
import { Link} from 'react-router-dom';
const Navbar = () => {

    return (
        <div className="navbar">
            <a href={"/"}>
            <img src={pillar} alt="" height={50}/> 
            </a>
            <h1>Retail Banking System</h1>
            <div className="links">
                <Link to={"/register"}>sign up</Link>
                <Link to={"/login"} style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>sign in</Link>
            </div>
        </div>
    );

}
 
export default Navbar;
