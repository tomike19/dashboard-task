import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Users from './component/Users/users'
import FemaleUser from './component/femaleUsers/femaleUsers'
import MaleUsers from './component/MaleUsers/maleUsers'




const BaseRouter = () =>{
return(
  <Switch>
<Route exact path= "/" component={Users}/>
<Route exact path= "/male" component={MaleUsers}/>
<Route exact path= "/female" component={FemaleUser}/>
  </Switch>
)
}

export default BaseRouter