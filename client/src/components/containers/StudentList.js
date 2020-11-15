import React,{Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
// Import Components and Functions
import StudentCard from "../StudentCard";
import StudentContext from "../context/studentContext";

const StudentList = () => {
	// Use Context
	const context = useContext(StudentContext);
	const {studentList,filtered} = context;
	// Define variables 
	const no_students = (<div className="p-3">
			<p className="text-muted text-center">No students to display. Please add students</p>
		</div>)
	return (
		<Fragment>
			{filtered !== null? filtered.map((student)=>{
				return <StudentCard key={student.REGNO} details={student}/>
			}): studentList.map((student)=>{
				return <StudentCard key={student.REGNO} details={student}/>
			})}
			
			
		</Fragment>
		
	)
}



export default StudentList