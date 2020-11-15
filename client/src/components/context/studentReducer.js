// Import types
import {ADD_STUDENT,SET_CURRENT,DELETE_STUDENT,CLEAR_CURRENT,CLEAR_FILTER, FILTER_STUDENTS, UPDATE_STUDENT} from "./types";


const studentReducer = (state, action)=>{
  switch(action.type){
    case ADD_STUDENT:
      return {
        ...state,
        body: [...state.body, action.payload]
      }
    case UPDATE_STUDENT:
      return {
        ...state,
        body: state.body.map(student=> student.REGNO === action.payload.REGNO? action.payload: student)
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_STUDENTS:
      return {
        ...state,
        filtered: state.body.filter(student =>{
          const regex = new RegExp(`${action.payload}`, "gi");
          return student.REGNO.match(regex) || student.STUDENT_NAME.match(regex); 
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default:
      return state;
  }
}

export default studentReducer;