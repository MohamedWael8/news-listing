import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Login = ({handleChange , checkCredentials}) => 
{
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={ (event) => handleChange(event) }/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" onChange={ (event) => handleChange(event) }/>
                </div>
                <button type="button" className="btn btn-primary" onClick={ (event) => checkCredentials(event) }>Submit</button>
            </form>
        </div>
      );
}
 
export default Login;