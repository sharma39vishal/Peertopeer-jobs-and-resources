import React from 'react'
export default function Header(props) {
  return (
       <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="https://st2.depositphotos.com/4827821/7207/v/950/depositphotos_72076751-stock-illustration-letter-p-logo-design-simple.jpg" alt="logo" width="30" height="24"/>
      </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" 
            // aria-current="page"
             href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/leaderboard">Leaderboard</a>
          </li> */}

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Upcoming
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/contest">Contest</a></li>
              <li><a className="dropdown-item" href="/jobs">Jobs</a></li>
              {/* <li><a className="dropdown-item" href="#">Jobs</a></li> */}
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resources">Resources</a>
          </li>
        </ul>
        <li className="d-flex nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" alt="avatar" width="30" height="24"/>       
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>{props.user && props.user._id ? <a className="dropdown-item" href="/profile">Profile</a>:<a className="dropdown-item" href="/login">Login</a> } 
                </li>
                {props.user && props.user._id ?<a className="nav-link active" href='/' onClick={() => props.updateUser({})} >Logout</a>: <li><a className="dropdown-item" href="/newuser">New User</a></li>}
            </ul>
          </li>
      </div>
    </div>
  </nav>
  </div>
  )
}
