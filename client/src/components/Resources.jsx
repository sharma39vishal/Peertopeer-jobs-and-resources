import Addresources from './Addresources';
import React, { Component } from 'react'
export default class Jobs extends Component  {
    constructor(){
        super();
        this.state={
          error:null,
          data:[]
        };
      }
      componentDidMount() {
        fetch("/getresources")
          .then(res => res.json())
          .then(
            (ans) => {
              this.setState({
                data:ans
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )

        }
    
   
    
    render() {
      const { error,data } = this.state;
      console.log(this.state);
      if (error) {
        return <div>Error: {error.message}</div>;
      }
       else {
        return (
         <div className='container' >      
          <div className="alert alert-primary mx-4">
            <h2><img src='https://img.icons8.com/external-flat-02-chattapat-/344/external-resources-business-management-flat-02-chattapat-.png' width={"50"} />  Resources Section</h2>
          </div>
          {data.map(data=>(
          <div className="card text-center my-3" key={data.name}>
            <div className="card-header">
            <div className="container">
            <div className="row">
              <div className="col">
                <div className='row'>
          <div className='col'>
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" alt="avatar" width="30" height="24"/>       
          </div>
          <div className='col'>
            <h6>{data.username}</h6>
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
                  <div className="badge bg-secondary">
                    {data.tag}
                </div>          
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="card-body">
            <a href={data.implink} > <h5 className="card-title">{data.heading}</h5></a>
              <p className="card-text">{data.content}</p>
              {/* <a href={data.implink} className="btn btn-primary">Link</a> */}
            </div>
          </div>
          ))}
          <br/>

              </div>
           

          
      )
   }
}
}


// import axios from 'axios';
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// export default function Resources(props) {

// const [data,setData]=useState([]);
// const getData=()=>{
//   axios.get('/getresources')
//   .then((res)=>{
//     console.log(res);
//     setData(res.data);
//   });
// }


// useEffect(()=>{getData()},[]);

//   return (
//     <div className='container' style={{padding:"3%"}}>      
// <div className="alert alert-primary mx-4">
//   <h2>Resources Section</h2>
// </div>
// {data.map(data=>(
// <div className="card text-center my-3" key={data.name}>
//   <div className="card-header">
//   <div className="container">
//   <div className="row">
//     <div className="col">
//       <div className='row'>
// <div className='col'>
// <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/33.svg" alt="avatar" width="30" height="24"/>       
// </div>
// <div className='col'>
//   <h6>{data.username}</h6>
// </div>
//       </div>
      
//     </div>
//     <div className="col mx-4">
//     </div>
//     <div className="col">
//       <div className='row'>
//         <div className='col'>
//         <h6>Tags:</h6>
//         </div>
//         <div className='col'>
//         <div className="badge bg-secondary">
//           {data.tag}
//       </div>          
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   </div>
//   <div className="card-body">
//     <h5 className="card-title">{data.heading}</h5>
//     <p className="card-text">{data.content}</p>
//     <a href={data.implink} className="btn btn-primary">Link</a>
//   </div>
// </div>
// ))}
// <br/>
//  <Addresources user={props.user}/>
//     </div>
//   )
// }
