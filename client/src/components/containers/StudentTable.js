import React from 'react'

const StudentTable = (props) => {
  return (
    <section id="student-list" className="body mt-4 math">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <table className="table table-bordered table-hover mt-3">
          <thead>
          <tr className="bg-danger text-white">
            <th scope="col">&nbsp</th>
            <th scope="col">REG.NO</th>
            <th scope="col">STUDENT NAME</th>
            <th scope="col">CSWK</th>
            <th scope="col">EXAM</th>
            <th scope="col">FINAL</th>
            <th scope="col">GRADE</th>
            <th scope="col">{" "}</th>
          </tr>
          </thead>
          <tbody>
          {props.children}
          </tbody>
        </table>

      </div>
    </div>

  </section>
  )
}

export default StudentTable;