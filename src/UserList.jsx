import { Component } from "react";
import axios from "axios";
import UserItem from "./UserItem";
import Loader from '../src/assets/Loader.gif';

class UserList extends Component {

    state = {
        users: [],
        loading: true,
        error: false
    }
    constructor(){
        super()
        setTimeout(() => {
            axios.get('https://api.github.com/users')
        .then(response => this.setState({users: response.data,loading:false}))
        .catch(error=> this.setState({error:true}))
        .finally(this.setState({loading:false}));
        }, 2000);
        
    }

    render() {

        return  <div>
            {this.state.loading? <img className="absolute left-96 top-96" src={Loader}  width={40} height={40}/>:null}
            {this.state.error? <h1 className="bg-red-400">This is the error message</h1> :null}
            <h1 className="m-2" >Find below the Github user list:</h1>
            {this.state.users.map(element => <UserItem element={element}/>)}

        </div> 
    }

}


export default UserList;