import React,{Fragment} from 'react';
import Header from "../Header";
import StudentForm from "../StudentForm";
import StudentCard from "../StudentCard";
import SearchBar from "../SearchBar";
import Body from "./Body";
import HeaderModal from "../HeaderModal";

const HomePage = () => {
  return (
    <Fragment>
      <Header/>
      <Body>
        <StudentForm/>
        <div className="col-md-6">
          <SearchBar/>
          <StudentCard/>
          <StudentCard/>
          <HeaderModal/>        
        </div>
      </Body>
    </Fragment>
  )
}

export default HomePage