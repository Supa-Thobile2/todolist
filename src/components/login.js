import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";
import "../css/component.css"
import Register from "./register";
function Login(){

    let history = useHistory();
    let Register = (()=>{
        history.push("/Home")
    })
    return(
        <div className='container'>
            <div className='img'>
                <img src="https://images.unsplash.com/photo-1659030639055-9b148cf43731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </div>
            <div className='form'>
            <h1>Welcome Back! Login</h1>
            <h2>Manage Your Checklist Easily</h2>
            <label for="email">Email</label><br></br>
            <input type="email" placeholder="Enter your Email here"/><br></br>
            <label for="password">Password</label><br></br>
            <input type="password" placeholder="Enter your Password here"/><br></br>
            <button type="btn" onClick={Register}>Login</button><br></br>
            <span>
                Don't have an account?
            </span>
            <span>
               {/* <Link to={''}>Create one?</Link> */}
            </span>

            <span>
                OR
            </span>

            <span>
                Login with Google
            </span>
          

            </div>
           

        </div>
    )
}

export default Login;