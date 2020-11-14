import React,{useContext, useState, useEffect} from 'react';
import StudentContext from "./context/studentContext";

const StudentForm = () => {
// Create context
    const context = useContext(StudentContext);
    const {current, addStudent, updateStudent, clearCurrent} = context
// Create state
    const [currentStudent, setCurrentStudent] = useState({
      REGNO: "",
      STUDENT_NAME: "",
      CSWK: "",
      EXAM: ""      
    });
    const {REGNO, STUDENT_NAME, CSWK, EXAM} = currentStudent
// Use effect
    useEffect(()=>{
      if(current!==null){
        setCurrentStudent(current);        
      }
    },[current]);

// Define functions
    const onChangeHandler = (e) =>{
      setCurrentStudent({...currentStudent, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = e =>{
      e.preventDefault();   
      // Check whether student exists (update)        
        // YES? Update student
        if(current!== null){
          updateStudent(currentStudent)
        }else{
        // : Add new student
        addStudent(currentStudent);          
        }
      
        setCurrentStudent({
        REGNO: "",
        STUDENT_NAME: "",
        CSWK: "",
        EXAM: ""      
      })
        clearCurrent();
        
    }

  return (
    <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        Please Fill in The Student Details
      </div>
      <div className="card-body">
        <form onSubmit={onSubmitHandler}>
         <div className="input-group">
           <div className="input-group-prepend">
             <span className="input-group-text" ><i className="fas fa-user"></i></span>
           </div>
           <input className="form-control" type="text" name="STUDENT_NAME" value={STUDENT_NAME} placeholder="Student Name" onChange={onChangeHandler}/>
         </div>
         <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="stID">Reg. Number</span>
          </div>
          <input className="form-control" type="text" name="REGNO" value={REGNO} placeholder="Student ID" onChange={onChangeHandler}/>
        </div>
         
         <div className="form-row math">
          <div className="col-6">
            <div className="input-group mt-2">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  CourseWork
                </span>
              </div>
              <input className="form-control" type="text" name="CSWK" value={CSWK} onChange={onChangeHandler}/>
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
              <input className="form-control" type="text" name="EXAM" value={EXAM} onChange={onChangeHandler}/>
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