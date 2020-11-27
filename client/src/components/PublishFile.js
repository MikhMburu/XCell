import React,{useContext} from 'react';
import StudentContext from "./context/studentContext";
import axios from "axios";

const PublishFile = () => {
  const context = useContext(StudentContext);
  const {studentList, analysis,docHeader} = context;

  const compileAndSubmit = async () =>{
    let file = {};
    file["fileName"] = docHeader.title;
    // Header
    let header = docHeader;
    header["size"]= studentList.length+21;
    // Body
    let body = studentList;

    // Footer
    let footer = analysis;
    footer["docLength"]= studentList.length+3

    file["data"] = {
      header,
      body,
      footer
    }

    // file = {
    //   ...file,
    //   header,
    //   body,
    //   footer
    // }

    try {
      const res = await axios.post("/publish", file, {
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(res);
    } catch (err) {
      console.log("There was a problem with publishing \n", err)
    }
  }

  if(studentList.length !== 0){
    return (<button className="btn btn-success ml-2" onClick={compileAndSubmit}>
    Publish File
  </button>);
  }else{
    return (<button className="btn btn-outline-success" disabled>Publish File</button>)
  }
  
}

export default PublishFile;
