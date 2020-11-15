// Import Libraries
import React, { useReducer} from "react";
import studentReducer from "./studentReducer";
import StudentContext from "./studentContext";
import {computeGrade} from "../utilities/utils";

// Import types
import {ADD_STUDENT,
     DELETE_STUDENT,
     SET_CURRENT,
     CLEAR_CURRENT,
     PUBLISH_FILE,
     UPLOAD_FILE, 
     FILTER_STUDENTS,
     UPDATE_STUDENT,      
     CLEAR_FILTER} from "./types";

// Create Intial State
const initialState = {	
    header:{
        size: 36,
        faculty: "SCHOOL OF EDUCATION",
        group: "REGULAR",
        dept: "DEPARTMENT OF BUSINESS ADMINISTRATION", 
        yearofstudy: "4TH YEAR", 
        programme: "BACHELOR OF EDUCATION",
        acadYear: "2017/2018",
        dateofexam: "MAY-AUG 2018",
        title: "TBS 404 - INTERNATIONAL MARKETING"
    },
    body:
        [
    
    
        ],
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
        // Upload a record
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
        // Publish a record
    

    return (<StudentContext.Provider value={{
                docHeader: state.header,
                studentList: state.body,
                analysis: state.footer,
                current: state.current,
                filtered: state.filtered,
                addStudent,
                setCurrent,
                updateStudent,
                clearCurrent,
                setFilter,
                clearFilter
                }       
        }>
            {props.children}
        </StudentContext.Provider>)
}

export default StudentState;