import React from 'react'

const SearchPatient = () => {
  return (
    <div>
         <div className="container">
            <center><h1><b>SEARCH PATIENT</b></h1></center>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">TOKEN NUMBER</label>
                    <input type="text" className="form-control" /><br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-secondary">SEARCH</button></center>
                </div>
            </div>
         </div>

    </div>
  )
}

export default SearchPatient