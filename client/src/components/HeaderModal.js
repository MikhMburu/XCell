import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import StudentContext from "./context/studentContext";

const HeaderModal = () => {
    // Define State
    const [header, setHeader] = useState({
        size: 1,
        faculty: "",
        group: "",
        dept: "",
        yearofstudy: "",
        programme: "",
        acadYear: "",
        dateofexam: "",
        title: ""
    })
    // Define context
    const context = useContext(StudentContext);
    const {studentList, setHeaderObj} = context;
    // Use Effect
    useEffect(()=>{
      if(studentList.length!== 0){
        setHeader({...header, size: studentList.length+20})
      }
    }, [studentList]);
    // Define functions
    const onChangeHandler = e => {
        setHeader({ ...header, [e.target.name]: e.target.value.toUpperCase() })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        
        setHeaderObj(header);
    }

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title" >Exam Details</h5>

            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body bg-light">
            <h6>Please provide details of the exam in the form below</h6>
            <hr />
            <form onSubmit={onSubmitHandler}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Faculty</span>
                </div>
                <input className="form-control" type="text" name="faculty" onChange={onChangeHandler} placeholder="e.g. School of Business" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Department</span>
                </div>
                <input className="form-control" type="text" name="dept" onChange={onChangeHandler} placeholder="e.g. Department of Business Administration" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Programme</span>
                </div>
                <input className="form-control" type="text" name="programme" onChange={onChangeHandler} placeholder="e.g. Bachelor of Education Administration" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Title</span>
                </div>
                <input className="form-control" type="text" name="title" onChange={onChangeHandler} placeholder="e.g. TBS 416-HUMAN RESOURCES MANAGEMENT" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="yearofstudy">Group</label>
                  <select name="yearofstudy" onChange={onChangeHandler} className="form-control">
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                    <option>5th Year</option>
                    <option>6th Year</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="acadYear">Acadenic Year</label>
                  <select name="acadYear" onChange={onChangeHandler} className="form-control">
                    <option>2017/18</option>
                    <option>2018/19</option>
                    <option>2019/20</option>
                    <option>2020/21</option>
                    <option>2021/22</option>
                    <option>2022/23</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="group">Group</label>
                  <select name="group" onChange={onChangeHandler} className="form-control">
                    <option>REGULAR</option>
                    <option>MODULE II</option>
                    <option>MODULE III</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="dateofexam">Date</label>
                  <input className="form-control" onChange={onChangeHandler} type="date" name="dateofexam" />
                </div>
              </div>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
          <div className="modal-footer">

          </div>
        </div>
      </div>
    </div>)
}

export default HeaderModal;