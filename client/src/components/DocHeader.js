import React, { useContext } from 'react';
import StudentContext from "./context/studentContext";

const DocHeader = () => {
    const context = useContext(StudentContext);
    if (context.docHeader !== null) {
        const { faculty, dept, programme, title, group, acadYear, yearofstudy, dateofexam } = context.docHeader;
    }

    return (
        <section id="letter-head" className="header bg-dark text-white mt-1">  
        <div className="container">
          <h2 className="text-center">UNIVERSITY OF NAIROBI</h2>
          <div className="row">
          {context.docHeader===null?
           (<div className="text-center p-2 mx-auto"><p className="display-4 text-center">No data to display</p></div>)
           :
            (<div>
              <div className="col-6">
                    <ul>
                      <li><span> Faculty:</span> School Of Education</li>
                      <li><span>Department:</span> Department of Business Administraion</li>
                      <li><span>Programme:</span> Bachelor Of Education</li>
                      <li><span>Title of Paper:</span> TBS 406 - HUMAN RESOURCES MANAGEMENT</li>
                    </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li><span>Group:</span> Regular</li>
                  <li><span>Year:</span> 4th Year</li>
                  <li><span>Academic Year:</span> 2017/2018</li>
                  <li><span>Date:</span> May/Aug 2018</li>
                    </ul>
             </div>
                      
            
            </div>)}
        </div>
       
        </div>
      </section>
    )
}

export default DocHeader