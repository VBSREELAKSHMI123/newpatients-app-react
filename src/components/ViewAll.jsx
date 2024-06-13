import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    
        const [data,setData]=useState([])
        const fetchData=()=>{
          axios.get("http://localhost:8083/view").then(
            (response)=>{
              setData(response.data)
            }
          ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
      return (
        <div>
            <NavBar/>
           <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
      <thead>
        <tr>
          <th scope="col">PATIENT NAME</th>
          <th scope="col">TOKEN NO</th>
          <th scope="col">DOCTOR</th>
          <th scope="col">DATE</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
            (value, index)=>{
                return <tr>
                <td>{value.pname}</td>
                <td>{value.pcode}</td>
                <td>{value.dr}</td>
                <td>{value.date}</td>
              </tr>
            }
        )
    
        }
        
      </tbody>
    </table>
                </div>
            </div>
           </div>
        </div>
      )
    }
    
 
   
export default ViewAll