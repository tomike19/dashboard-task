
import './App.css';
import Homepage from './component/homepage/homepage';
import {BrowserRouter as Router} from 'react-router-dom'
import Hello from './component/hello/hello'
import AllUsers from './component/info page/info'
import BaseRouter from './router.js'

function App(){
  
    return(
<div className="App">
  <Router>
          <Homepage>
          <div className="col-md-5">
            <Hello/>
          </div>
            <div className="col-md-5">
            <AllUsers/>
            </div>
          </Homepage>
     </Router>
    </div>
    )
    
}


export default App;
