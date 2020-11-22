import React,{useContext, useEffect} from 'react';
import DocHeader from "../DocHeader";
import StudentTable from "./StudentTable";
import StudentItem from "../StudentItem";
import StudentContext from "../context/studentContext";

const SummaryPage = () => {
  const context = useContext(StudentContext);
  const {studentList, deleteStudent, setFooter} = context;
  // Define functions
  useEffect(()=>{
    if(studentList!==null){
      setFooter(studentList)
    }
  },[studentList]);
  return (
    <div>
      <DocHeader />
      <div className="spacer">
        &nbsp;
      </div>
      <StudentTable>
        {studentList.length !== 0? studentList.map(student=>{
          return <StudentItem key={student.REGNO} count={studentList.indexOf(student)+1} item={student} onDelete={deleteStudent}/>
        }):(<tr className="p-4 mx-auto text-muted">
          <td>No students to display</td>
        </tr>)}
        
        
      </StudentTable>
      
    </div>
  )
}

export default SummaryPage;