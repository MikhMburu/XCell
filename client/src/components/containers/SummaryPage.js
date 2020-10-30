import React from 'react';
import DocHeader from "../DocHeader";
import StudentTable from "./StudentTable";
import StudentItem from "../StudentItem";

const SummaryPage = () => {
  return (
    <div>
      <DocHeader />
      <div className="spacer">
        &nbsp;
      </div>
      <StudentTable>
        <StudentItem/>
        <StudentItem/>
        <StudentItem/>
        <StudentItem/>
      </StudentTable>
      
    </div>
  )
}

export default SummaryPage;