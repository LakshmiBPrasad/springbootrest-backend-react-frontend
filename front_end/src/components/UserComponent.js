import React from 'react';
import UserService from '../services/UserService';
import axios from 'axios'
const USERS_REST_API_URL = "http://localhost:8080/api/users";


class UserComponent extends React.Component{
constructor(props)
{
    super(props)
    this.state={
        users:[]
    }

}

 componentDidMount(){

    axios.get(USERS_REST_API_URL).then((response) => {this.setState({users:response.data})} );
       //UserService.getUsers().then((response) => {this.setState({users:response.data})} );


      
        

 }


render(){
    return(
        <div>
        <h1 className="text-center"> Users List </h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>User Id</td>
                    <td>User Fname</td>
                    <td>User Lname</td>

                </tr>


            </thead>

            <tbody>
                {
                    this.state.users.map(
                        users=>
                        <tr key ={users.id}>
                            <td>{users.id}</td>
                            <td>{users.firstName}</td>
                            <td>{users.lastName}</td>

                        </tr>

                    )
                }
            </tbody>

        </table>



        </div>


    )
}


}



export default UserComponent
