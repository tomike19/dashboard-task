import React, { Component } from 'react'

import Filter from '../filter/filter.jsx'
import axios from 'axios'




class FemaleUsers extends Component {

  constructor(props){
    super(props)

    this.state ={
      data :[]
    }
  }

 componentDidMount () {
   axios.get('https://randomuser.me/api/?gender=female').then(res =>{
     const data = res.data.results
     console.log(data)
     this.setState ({
       data:data
     })
   }).catch(error=> {
     console.log(error)
   })
 }
 

  render (){
    return (
      <div className="col-6 all-users">
        <div className="row">
           <h4>All Users</h4>
        </div>
        <div className="row ">
           <p >Filter by</p>
        </div>
        <Filter/>
        {
          this.state.data.map(item=> (
            <div className="card mt-2 info card border-0 shadow-sm">
      <div className="row">
       <div className="card1-img col-4">
      <img src={item.picture.medium} className="images"/>
      </div>
      <div className="">
  <strong className="names">{item.name.first}  {item.name.last}</strong><br/>
  <em className="details">{item.location.street.number} {item.location.street.name} {item.location.city} {item.location.state}</em>
  <div>
    <span className="">
    <i class="far fa-envelope white envelope"  arial-hidden="true"></i>
    </span>
    {item.email}
    <span>
    <i class="fa  fa-phone"></i>
    </span>
    {item.phone}
    <span>
      <button class="buttn"><i class="fas fa-arrow-right"></i></button>
    </span>
  </div>
  
      </div>
      
  </div>
   
      </div>

          ))
        }
        </div>
)
}
}


        export default FemaleUsers
