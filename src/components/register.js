import "../css/component.css"
function Register(){
    return(
        <div className="container">
            <div>
                <img src="https://images.unsplash.com/photo-1659030639055-9b148cf43731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </div>
            <div>
            <h1>Welcome Back</h1>
            <h2>Manage Your Checklist Easily</h2>
            <label for="name">Email</label><br></br>
            <input type="text" placeholder="John Doe"/><br></br>

            <label for="email">Email</label><br></br>
            <input type="email" placeholder="Enter your Email here"/><br></br>
            <label for="password">Password</label><br></br>
            <input type="password" placeholder="Enter your Password here"/><br></br>
            <button type="btn">Login</button><br></br>
            <span>Already have an account? Log in</span><br></br>
            <span>
                OR

            </span><br></br>
            <span>
                sign-in with google
            </span>

            </div>
            
        </div>
    )
}

export default Register;