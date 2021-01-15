import React, { Component } from 'react'
import './users.css'
import Filter from '../filter/filter.jsx'
import axios from 'axios'
import AllUsers from './All Users/AllUsers'



class Users extends Component {

  constructor(props){
    super(props)

    this.state ={
      data :[]
    }
  }

 componentDidMount () {
   axios.get('https://randomuser.me/api/?results=3').then(res =>{
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
            <AllUsers item = {item}/>
          ))
        }
        </div>
    )
  }
  
}

export default Users
