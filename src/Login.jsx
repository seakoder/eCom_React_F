
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./context/AppContext";

function Login( ) {

const {setLoggedIn} = useContext(AppContext);
    const [user, setUser] = useState({email: "", password: ""});
    const [hasError, setError] = useState(false)

   const onTextChange = (e)=> {

    const modUser = {...user, [e.target.name]: e.target.value }
        setUser(modUser);
    }
    const navigate= useNavigate();

   const onLogin = async (e) => {
        try {
            e.preventDefault();
            let res = await axios.post("https://fsa-api-b4.onrender.com/api/users/signin", user)
            localStorage.setItem('token', res.data.token);
            setLoggedIn(true);
            navigate('/users')
        } catch (error) {
            setError(true)
            
        }
      
}

        return (
                <form onSubmit={onLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs mt-48 mx-auto border-t border-r border-l border-green-200">
                    
                    {hasError? <span className="bg-red-600 text-white p-1">Invalid Username or password</span>:null}
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onChange={onTextChange} name="email" style={{ borderLeft: user.email? '4px solid green':'4px solid red'}} className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                        {!user.email? <span className="text-red-600">Email is needed</span>:null}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input style={{ borderLeft: user.password? '4px solid green':'4px solid red'}} onChange={onTextChange} name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                        {!user.password? <span className="text-red-600">Password is needed</span>:null}
                    
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-green-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                            LogIn
                        </button>
                       
                    </div>
                </form>
                

        )
    }


export default Login;