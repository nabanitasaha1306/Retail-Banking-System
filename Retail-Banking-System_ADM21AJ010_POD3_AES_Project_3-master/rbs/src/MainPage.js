//import React,{useState} from 'react';
//import { Redirect } from 'react-router';
import {Link }from "react-router-dom"; 
import wallpaper from './wallpaper.png'

const MainPage = () => {
    // const [auth,setAuth] = useState(false);
    // if(auth){
        // return <Redirect to='/checkbal'/>
    //}
 return (
     <div className="mainpage">
        <form>
            <div className="ui divider"></div>
            <div className="ui-form">
                <button className="fluid ui button blue">
                     <Link to = "/send">
                     TRANSFER
                     </Link> 
                </button><br></br>
                <br></br><br></br>

                <button className="fluid ui button blue" >
                    <Link to = "/checkbalance">
                    CHECK BALANCE 
                     </Link> 
                </button><br></br>
                <br></br><br></br>

                <button className="fluid ui button blue"> TRANSACTION HISTORY </button><br></br>
                <br></br><br></br>

                <button className="fluid ui button blue">
                     <Link to = "/calculator">
                     LOAN CALCULATOR
                     </Link> 
                </button><br></br>
                <br></br><br></br>

                <button className="fluid ui button blue">
                    <Link to ="/accountdetails">
                     ACCOUNT DETAILS
                         </Link>
                </button><br></br>
                <br></br>
            </div>
            <div className="wallpaper">
                <img src={wallpaper} style={{
                    position: "absolute",
                    top: "90px",
                    height: "86%",
                    width: "80%",
                    left: "270px",
                    marginTop:"0.5px",
                    display: 'flex'
                }}/>
            </div>
         </form>
    </div>
    );
}
    export default MainPage;