import React,{useContext} from 'react';
import StudentContext from "./context/studentContext";

const PublishFile = () => {
  const context = useContext(StudentContext);
  const {studentList} = context;

  if(studentList.length !== 0){
    return (<button className="btn btn-success ml-2">
    Publish File
  </button>);
  }else{
    return (<button className="btn btn-outline-success" disabled>Publish File</button>)
  }
  
}

export default PublishFile;
