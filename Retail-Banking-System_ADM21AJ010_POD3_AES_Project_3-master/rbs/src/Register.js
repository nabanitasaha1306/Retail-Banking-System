const Register = () => {
    return(
        <div className="register">
            <h2>SIGN UP</h2>

            <form>
        <label> First Name:</label>
        <input type="text" placeholder="First Name"
        required
        />

        <label> Last Name:</label>
        <input 
        type="text" placeholder="Last Name"
        required
        />

        <label>Username:</label>
        <input 
        type="email" placeholder="Email"
        required
        />

        <label>Password:</label>
        <input 
        type="password" placeholder="Password"
        required
        />

        <label> Confirm Password:</label>
        <input 
        type="password" placeholder="Confirm Password"
        required
        />

        <button> Register</button>
        </form>
        </div>
    );

}
export default Register;