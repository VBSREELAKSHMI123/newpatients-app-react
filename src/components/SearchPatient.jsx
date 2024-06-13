import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchPatient = () => {
    const [data,setData]=useState(
        {
          "pcode":""
        }
      )
      const [input,viewData]=useState([])
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8083/search",data).then(
          (response)=>
            {
              viewData(response.data)
            }
        ).catch().finally()
      }
    
      const deleteCourse=(id)=>{
       let input = {"_id":id }
       axios.post("http://localhost:8083/delete",input).then(
        (response)=>{
          console.log(response.data)
          if (response.data.status=="success") {
            alert("Deleted")
          } else {
            alert("Error")
          }
        }
       ).catch()
      }
  return (
    <div>
         <NavBar/>
        <div className="container">
            <center><h1><b>SEARCH PATIENT</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">TOKEN NO</label>
                    <input type="text" className="form-control" name='pcode' value={data.pcode} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <center> <button className="btn btn-secondary" onClick={readValue}>SEARCH</button></center>
                </div>
            </div>
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table">
  <thead>
    <tr>
      <th scope="col">PATIENT NAME</th>
      <th scope="col">TOKEN NO</th>
      <th scope="col">DOCTOR</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
      {input.map(
      (value, index)=>{
        return <tr>
        <td>{value.pname}</td>
        <td>{value.pcode}</td>
        <td>{value.dr}</td>
        <td>{value.date}</td>
        <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>
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

export default SearchPatient