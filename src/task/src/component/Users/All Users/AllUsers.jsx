import React from 'react'
import './AllUsers.css'

const AllUsers =(props) => {
  return (
   
      <div className="card mt-2 info card border-0 shadow-sm">
      <div className="row">
       <div className="card1-img col-4">
      <img src={props.item.picture.medium} className="images"/>
      </div>
      <div className="">
  <strong className="names">{props.item.name.first}  {props.item.name.last}</strong><br/>
  <em className="details">{props.item.location.street.number} {props.item.location.street.name} {props.item.location.city} {props.item.location.state}</em>
  <div>
    <span className="">
    <i class="far fa-envelope white envelope mt-3"  arial-hidden="true"></i>
    </span>
    {props.item.email}
    <span>
    <i class="fa  fa-phone"></i>
    </span>
    {props.item.phone}
    <span>
      <button class="buttn"><i class="fas fa-arrow-right"></i></button>
    </span>
  </div>
  
      </div>
      
  </div>
   
      </div>

     

  )
}

export default AllUsers
