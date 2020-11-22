// Import Libraries
import React, { useReducer} from "react";
import studentReducer from "./studentReducer";
import StudentContext from "./studentContext";
import {computeGrade, computeAnalysis} from "../utilities/utils";

// Import types
import {ADD_STUDENT,
     DELETE_STUDENT,
     SET_CURRENT,
     CLEAR_CURRENT,
     UPLOAD_FILE, 
     FILTER_STUDENTS,
     UPDATE_STUDENT,
     SET_HEADER,
     CLEAR_FILTER,
     SET_FOOTER} from "./types";

// Create Intial State
const initialState = {	
    header: null,
    body:[],       
    footer:{
		analysis:[
		["A",27],["B", 33],["C", 62],["D", 14],["E",8],["ABS",20],["TOTAL", 164]
		],
    },
    current: null,
    filtered: null
    
}


// Create provider component
const StudentState = (props) =>{
    const [state, dispatch] = useReducer(studentReducer, initialState);
    // Actions
        // Upload a record and load students
        const loadStudents = students =>{
            dispatch({
                type: UPLOAD_FILE,
                payload: students
            })
        }
        // Add a student
        const addStudent = (student) =>{
            const {CSWK, EXAM} = student;
            student["FINAL"] = computeGrade(CSWK, EXAM).final;
            student["GRADE"] = computeGrade(CSWK, EXAM).grade;
            // Dispatch to reducer
            dispatch({
                type: ADD_STUDENT,
                payload: student
            });
        }
        // Update Student
        const updateStudent = (student) =>{
            const {CSWK, EXAM} = student;
            student["FINAL"] = computeGrade(CSWK, EXAM).final;
            student["GRADE"] = computeGrade(CSWK, EXAM).grade;
            dispatch({
                type: UPDATE_STUDENT,
                payload: student
            })
        }
        
        // Set Current
        const setCurrent = (student) =>{
            delete student["FINAL"];
            delete student["GRADE"];
            student["CSWK"] = student["CSWK"].toString();
            student["EXAM"] = student["EXAM"].toString(); 

            dispatch({
                type: SET_CURRENT,
                payload: student
            })
        }
        // Clear current
        const clearCurrent = () =>{
            dispatch({
                type: CLEAR_CURRENT
            })
        }
        // Set Filter
        const setFilter = (text) =>{
            dispatch({
                type: FILTER_STUDENTS,
                payload: text
            })
        }
        // Clear Filter
        const clearFilter = () =>{
            dispatch({
                type: CLEAR_FILTER
            })
        }
        // Delete Student
        const deleteStudent = (id) => {
            dispatch({
                type: DELETE_STUDENT,
                payload: id
            })
        }
        // Set Header
        const setHeaderObj = (header)=>{
            dispatch({
                type: SET_HEADER,
                payload: header
            })
        }
        // Set Footer
        const setFooter = list =>{
            
            dispatch({
                type: SET_FOOTER,
                payload: computeAnalysis(list)
            })
        }
        
        
    

    return (<StudentContext.Provider value={{
                docHeader: state.header,
                studentList: state.body,
                analysis: state.footer,
                current: state.current,
                filtered: state.filtered,
                addStudent,
                loadStudents,
                setCurrent,
                updateStudent,
                clearCurrent,
                setFilter,
                clearFilter,
                setHeaderObj,
                deleteStudent,
                setFooter
                }       
        }>
            {props.children}
        </StudentContext.Provider>)
}

export default StudentState;