import { Link, useNavigate } from "react-router-dom";
import AppContext from "./context/AppContext";
import { useContext } from "react";



function Header(){

const {isLoggedIn, setLoggedIn} = useContext(AppContext);

    const navigate = useNavigate();

    const onLogout = () => {
        const a = confirm('are you sure?');
        if(a){
            localStorage.removeItem('token');
            setLoggedIn(false);
            navigate('/Login');
        }

    };

    return <div className="flex bg-green-800 text-white p-4">

        <h1 className="p-1 m-1 text-2xl">React-v18</h1>
        <ul className="flex m-auto">
            <li className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/">Home</Link></li>
            <li className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/Contact">Contact</Link></li>
            <li className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/Users">Users</Link></li>
            <li className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/About">About</Link></li>
            <li className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/Products">Products</Link></li>

        </ul>
{!isLoggedIn?<div>
 <button className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/Login">Login</Link></button>
        <button className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200"><Link to="/SignIn">SignUp</Link></button>
       </div> :null}

       {isLoggedIn? <button onClick={onLogout} className="p-1 m-1 hover:bg-green-400 text-xl border border-orange-200">Logout</button> : null}


    </div>
}

export default Header;