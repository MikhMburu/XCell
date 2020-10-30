import React from 'react'

const DocHeader = () => {
  return (
    <section id="letter-head" className="header bg-dark text-white mt-1">  
    <div className="container">
      <h2 className="text-center">UNIVERSITY OF NAIROBI</h2>
      <div className="row">
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
      </div>
    </div>
  </section>
  )
}

export default DocHeader