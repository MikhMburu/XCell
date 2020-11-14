import React from 'react'

const StudentTable = (props) => {
  return (
    <section id="student-list" class="body mt-4 math">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <table class="table table-bordered table-hover mt-3">
          <thead>
          <tr class="bg-danger text-white">
            <th scope="col">&nbsp</th>
            <th scope="col">REG.NO</th>
            <th scope="col">STUDENT NAME</th>
            <th scope="col">CSWK</th>
            <th scope="col">EXAM</th>
            <th scope="col">FINAL</th>
            <th scope="col">GRADE</th>
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