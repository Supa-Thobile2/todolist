function Login(){
    return(
        <div>
            <h1>Welcome Back</h1>
            <h2>Manage Your Checklist Easily</h2>
            <label for="email">Email</label><br></br>
            <input type="email" placeholder="Enter your Email here"/><br></br>
            <label for="password">Password</label><br></br>
            <input type="password" placeholder="Enter your Password here"/><br></br>
            <button type="btn">Login</button><br></br>
            <span>Don't have an account? Create one</span><br></br>
            <span>
                OR

            </span><br></br>
            <span>
                sign-in with google
            </span>

        </div>
    )
}

export default Login;