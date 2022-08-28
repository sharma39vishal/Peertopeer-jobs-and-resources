import React,{useState} from 'react'
import './login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login=({ updateUser})=>{
  const history = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("/login", user)
      .then(res => {
          alert(res.data.message)
          updateUser(res.data.user)
          history("/")
      })
    }
  return (
    <div><div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Login</h2>
        <div className="text-center mb-5 text-dark">Let's Join us</div>
        <div className="card my-5">

          <div className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            <div className="mb-3">
              <input type="text" name="email" 
            value={user.email} onChange={handleChange}
             placeholder="Enter your Email" className="form-control"/>
            </div>
            <div className="mb-3">
              <input type="password" name="password" 
            value={user.password} onChange={handleChange}
              placeholder="Enter your Password" className="form-control" id="password" />
            </div>

            <div className="text-center"><button type="submit" onClick={login} className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="/newuser" className="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


    </div>
  )
}

export default Login
