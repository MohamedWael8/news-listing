import React, { Component } from 'react';
import Login from './Login'

class LoginContainer extends Component {
    constructor(props) 
    {
        super(props);

        
        this.state = 
        { 
            temp: {email:"" , password:""}
        }

    }

    checkCredentials=()=>
    {
        var userCredentials = this.state.temp;
        var found = this.props.users.find((element) => 
        {
            return (element.email === userCredentials.email && element.password === userCredentials.password)
        });

        if(found !== undefined)
            console.log(true)
        else
            console.log(false)

    }

    handleChange=(event)=> 
    {
        const { target } = event;
        const value =  target.value;
        const { name } = target;
        this.setState(prevState => ({
            temp: {
                ...prevState.temp,
                [name]: value
            }
        }));
    }

    render() { 
        return ( 
            <Login  handleChange={this.handleChange} checkCredentials={this.checkCredentials}/> 
        );
    }
}
 
export default LoginContainer;