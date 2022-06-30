import pillar from './pillar.jpg';
import React from 'react';
const NavbarAfter = () => {

    return (
        <div className="navbar">
            <a href={"/"}>
            <img src={pillar} alt="" height={50}/> 
            </a>
            <h1>Retail Banking System</h1>
            <div className="links">
                
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Logout</a>
            </div>
        </div>
    );

}
 
export default NavbarAfter;