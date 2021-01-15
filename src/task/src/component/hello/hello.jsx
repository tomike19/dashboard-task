import React from 'react'
import './hello.css'
import { Link } from 'react-router-dom'



const  dashboard =() => {
  return (
   
      <div className='body'>
         <div class="row name">
         <div className="col-lg-6" >
          <h3 className=' hello'>Hello,<span className='emerald'>Emerald</span></h3>
          </div>
          <p className='letters'>Welcome to your dashboard,kindly sort through the user base</p>
          <button type="button" className="btn" class="btn btn-outline-secondary"><i class="fas fa-search search" ></i><span className="users">Find a user</span></button>
          </div>
          <h6>Show Users</h6>
      <div className=" row icon1 "> 
 <div className=" col-sm-2 icon">
   <Link to = "/"> <button type="button" class="btn btn-primary btn1"> <i class="fa fa-2x fa-users use" ></i></button></Link>
   <p className='users'>All users</p>
            </div>
            <div className=" col-sm-2 icon">
              <Link to ="/male">
              <button type="button" class="btn btn-primary btn2"><i class="fa fa-3x fa-male use1 "></i></button>
              </Link>
           
            <p className='male'>Male Users</p>
             </div>
             <div className=" col-sm-2 icon">
               <Link to = "/female">
               <button type="button" class="btn btn-primary btn3"><i class="fa fa-3x fa-female use1"></i></button>
               </Link>
             
             <p className="female">Female Users</p>
             </div>
    </div>
    </div>
  )
}




export default dashboard;
