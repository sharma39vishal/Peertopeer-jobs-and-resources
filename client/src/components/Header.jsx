import React from 'react'
export default function Header(props) {
  return (
       <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="data:image/png;base64,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" alt="logo" width="30" height="24"/>
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
