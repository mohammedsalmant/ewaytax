import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import {useHistory} from 'react-router-dom'
import cookie from 'js-cookie'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  useEffect(()=>{
    const token = cookie.get('token')
    console.log(token);
    if (token!==undefined){
      history.push("/dashboard")
    }
  },[])

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    Axios.post('http://multivendorappbackend.herokuapp.com/user/login',{email:email,password:password})
    .then(response => {
      console.log(response);
      console.log("test");
      cookie.set('token', response.data.token)
      history.push("/dashboard")
    })
  .catch(err=> {
      console.log(err)
    })    
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}