import React from 'react'

const StudentForm = () => {
  return (
    <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        Please Fill in The Student Details
      </div>
      <div className="card-body">
        <form>
         <div className="input-group">
           <div className="input-group-prepend">
             <span className="input-group-text" id="stName"><i className="fas fa-user"></i></span>
           </div>
           <input className="form-control" type="text" name="stName" placeholder="Student Name" aria-label="Student Name" aria-describedby="stName"/>
         </div>
         <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="stID">Reg. Number</span>
          </div>
          <input className="form-control" type="text" name="stName" placeholder="Student ID" aria-label="Student ID" aria-describedby="stID"/>
        </div>
         
         <div className="form-row math">
          <div className="col-6">
            <div className="input-group mt-2">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  CourseWork
                </span>
              </div>
              <input className="form-control" type="text" name="cswk"/>
              <div className="input-group-append">
                <span className="input-group-text">
                  /30
                </span>
              </div>
            </div>                  
          </div>
          <div className="col-6">
            <div className="input-group mt-2">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  Exam
                </span>
              </div>
              <input className="form-control" type="text" name="exam"/>
              <div className="input-group-append">
                <span className="input-group-text">
                  /70
                </span>
              </div>
            </div>                       
          </div>
         </div>
         
           <button className="btn btn-outline-primary mt-2"><i className="far fa-save"> Save Record</i>
           </button>
         
        </form>
      </div>
    </div>
  </div>
  )
}

export default StudentForm;