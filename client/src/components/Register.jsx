import './login.css'
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        cfusernames:"",
        ccusernames:"",
        leetusernames:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,cfusernames, ccusernames,leetusernames, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } else {
            alert("invlid input")
        }
      }

   return (
    <div><div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">New User !</h2>
        <div className="text-center mb-5 text-dark">Let's Join us</div>
        <div className="card my-5">

          <div className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="text" name="name" 
            value={user.name} 
            placeholder="Your Name" 
            onChange={ handleChange }/>
            </div>
            
            <div className="mb-3">
              <input  className="form-control" type="text" name="email"
             value={user.email}
              placeholder="Your Email"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input  className="form-control" type="text" name="ccusernames"
             value={user.ccusernames}
              placeholder="Your Codechef Username"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input  className="form-control" type="text" name="cfusernames"
             value={user.cfusernames}
              placeholder="Your Codeforces Username"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input  className="form-control" type="text" name="leetusernames"
             value={user.leetusernames}
              placeholder="Your Leetcode Username"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control"type="password" name="reEnterPassword"
             value={user.reEnterPassword}
              placeholder="Re-enter Password" 
              onChange={ handleChange }/>
            </div>
            <div className="text-center"><button className="btn btn-color px-5 mb-5 w-100" onClick={register}>Register</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
              Registered? <a href="/login" className="text-dark fw-bold"> Login</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

    </div>
  )
}

export default Register