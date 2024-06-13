import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'


const AddPatient = () => {
    const [data,setData]=useState(
        {
            "pname":"",
            "pcode":"",
            "dr":"",
            "date":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8083/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>PATIENT REGISTRATION</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label" PATIENT>NAME</label>
                            <input type="text" className="form-control" name='pname' value={data.pname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TOKEN NUMBER</label>
                            <input type="text" className="form-control"name='pcode' value={data.pcode} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOCTOR</label>
                            <input type="text" className="form-control" name='dr' value={data.dr} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" id="" className="form-control" name='date' value={data.date} onChange={inputHandler}/>
                            <br />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center>
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatient