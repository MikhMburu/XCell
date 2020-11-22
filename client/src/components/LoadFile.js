import React,{useState, useContext} from 'react';
import axios from "axios";
import StudentContext from "./context/studentContext";

const LoadFile = () => {
  const context = useContext(StudentContext);
  const {loadStudents} = context;
  // Set State
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Load an Excel document to begin..");
  // Define functions
  const fileHandler = e =>{
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }
  const onSubmitHandler = async e =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      loadStudents(res.data);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    console.log(`${fileName} loaded`);
  }
  return (
    <div>
      <p className="lead">{fileName}</p>
          <form onSubmit={onSubmitHandler}>
            <div className="custom-file">
              <input type="file" onChange={fileHandler}className="custom-file-input" name="xlFile"/>
              <label className="custom-file-label" htmlFor="xlFile">Choose file</label>
              <button className="btn btn-secondary btn-block my-2" type="submit">Load</button>
            </div>
          </form>
    </div>
  )
}

export default LoadFile;