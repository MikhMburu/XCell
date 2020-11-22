import React,{Fragment} from 'react';
import Header from "../Header";
import StudentForm from "../StudentForm";
import SearchBar from "../SearchBar";
import Body from "./Body";
import HeaderModal from "../HeaderModal";
import StudentList from "./StudentList";
// Define variables

const HomePage = () => {

  

  return (
    <Fragment>
      <Header/>
      <Body>
        <StudentForm />
        <div className="col-md-6"> 
          <SearchBar/>
          <StudentList/>
          <HeaderModal/>        
        </div>
      </Body>
    </Fragment>
  )
}

export default HomePage