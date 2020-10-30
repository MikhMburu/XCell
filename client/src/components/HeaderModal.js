import React from 'react';
import {Link} from "react-router-dom";

const HeaderModal = () => {
  return (
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" >
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
        <hr/>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Faculty</span>
            </div>
            <input className="form-control" type="text" name="faculty" placeholder="e.g. School of Business" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Department</span>
            </div>
            <input className="form-control" type="text" name="dept" placeholder="e.g. Department of Business Administration" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Programme</span>
            </div>
            <input className="form-control" type="text" name="prg" placeholder="e.g. Bachelor of Education Administration" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input className="form-control" type="text" name="title" placeholder="e.g. TBS 416-HUMAN RESOURCES MANAGEMENT" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputGroup">Group</label>
              <select id="inputGroup" className="form-control">
                <option selected>REGULAR</option>
                <option>MODULE II</option>
                <option>MODULE III</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="dateofexam">Date</label>
              <input className="form-control" type="date" name="dateofexam"/>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <Link to="/summary" className="btn btn-primary">Save changes</Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default HeaderModal;