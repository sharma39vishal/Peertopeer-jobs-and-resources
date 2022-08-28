import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Addresources(props) {
    const history = useNavigate()
    const [ resources, setresources] = useState({
        username:props.user.name,
        tag:"",
        heading:"",
        content:"",
        implink:""        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setresources({
            ...resources,
            [name]: value
        })
    }

    const add = () => {
        const { username,tag,heading,content,implink} = resources
        resources.username=props.user.name;
        if( username&&tag&&heading&&content){
         axios.post("/addresource", resources)
          .then( res => {
              alert(res.data.message)
              window.location.reload();
         })
    } else {
        alert("invlid input")
    }
    }

   return (
    <div>
        <h4  className="alert alert-warning mx-4">Let's Contribute Something</h4>

<div className="card text-center my-3" >
  <div className="card-header">
  <div className="container">
  <div className="row">
    <div className="col">
      <div className='row'>
<div className='col'>
<img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" alt="avatar" width="30" height="24"/>       
</div>
<div className='col'>
{ props.user.name ?  <h6>{props.user.name}</h6>:<h6></h6>}
</div>
      </div>
      
    </div>
    <div className="col mx-4">
    </div>
    <div className="col">
      <div className='row'>
        <div className='col'>
        <h6>Tags:</h6>
        </div>
        <div className='col'>
        <div >
        <input type="text" className="form-control" placeholder="Tag" name="tag" value={resources.tag } onChange={ handleChange } />
      </div>          
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="card-body">
    <h5 className="card-title " style={{paddingRight:"19%",paddingLeft:"19%"}}>
    <input type="text" className="form-control" placeholder="Heading" name="heading" value={resources.heading } onChange={ handleChange } />
    </h5>
    <p className="card-text" style={{paddingRight:"5%",paddingLeft:"5%"}}>
    <input type="text" className="form-control" placeholder="Content" name="content" value={resources.content } onChange={ handleChange } />
    </p>
    <p className="card-text" style={{paddingRight:"27%",paddingLeft:"27%"}}>
    <input type="text" className="form-control" placeholder="Link" name="implink" value={resources.implink} onChange={ handleChange } />
    </p>

    { !props.user.name ?     <button className="btn btn-primary"  onClick={()=>{alert("Login to Add Resources")}} >Submit</button>: <button className="btn btn-primary"  onClick={add}>Submit</button> }
    
  </div>
</div>
    </div>
  )
}
