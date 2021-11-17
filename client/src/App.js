import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'

function App() {



 const getData= async (e) =>{
   e.preventDefault();
   const res=await fetch("/data",{
    method:"GET",
    headers:{
      "Content-Type" : "application/json"
    }
  })
   alert("hello")
   console.log(res)
   
}
 





  return (
    <div className="App">
      <h1>Movies</h1>

      <div className="cont" onClick={getData}>
          
        <div className="row gy-4">
        <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>


            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 mt-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">Avatar</h5>
                      <h6 class="card-subtitle mb-2 text-muted">10.0</h6>
                      <p class="card-text">12/10/2011</p>
                      
                    </div>
                </div>
              
            </div>
        </div>


      </div>
      
      
    </div>
  );
}

export default App;
