import React,{useContext} from 'react';
import StudentContext from "./context/studentContext";

const StudentCard = ({details}) => {
  const context = useContext(StudentContext);
  const {setCurrent} = context
  const {STUDENT_NAME, REGNO, CSWK, EXAM} = details
  // Define functions
  const onEdit = e =>{
    setCurrent(details)
  }
  return (
    <div className="card mb-3 math shadow p-2 bg-white rounded" style={{"width": "26rem"}}>
            <div className="card-body">
              <h5 className="card-title">{STUDENT_NAME}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{REGNO}</h6>
              <table className="table table-hover">
                <tbody>
                <tr>
                  <th>CourseWork</th>
                  <td>{CSWK}</td>
                </tr>
                <tr>
                  <th>Exam</th>
                  <td>{EXAM}</td>
                </tr>
                </tbody>
              </table>
              <button className="card-link" onClick={onEdit}>Edit</button>
              
            </div>
          </div>
  )
}


export default StudentCard;