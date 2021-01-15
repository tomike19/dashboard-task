import React from 'react'
import './filter.css'


 const filter = () => {
  return (
    <div className="row">
      < div className="col-lg-4">
      <input type="email" class="form-control"  id="exampleFormControlInput1" placeholder="name@example.com"/>
     </ div>
      <div class="btn-group col-lg-4">
         <button type="button" class="btn  dropdown-toggle toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Country
         </button>
          <ul class="dropdown-menu">
         <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
        </div>
         <div className="col-lg-4 toggle1">
         <span><i class="fas fa-2x fa-toggle-on"></i></span>

         </div>
      </div>
     
      
      
  )
}

export default filter
