import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Login = () => {
    return(
        <div className="login">
            <h2>SIGN IN</h2>

            <form>

        <label>Username:</label>
        <input 
        type="email" placeholder="Username"
        required
        />

        <label>Password:</label>
        <input 
        type="password" placeholder="Password"
        required
        />

        <Link to="/home" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '10px',
                    padding:'10px',
                    paddingTop:'2px',
                    paddingBottom:'2px'
                                }}>
                    Login
                
        </Link>
        </form>
        </div>
    );

}
export default Login;