import React from 'react'

const StudentCard = () => {
  return (
    <div className="card mb-3 math shadow p-2 bg-white rounded" style={{"width": "26rem"}}>
            <div className="card-body">
              <h5 className="card-title">Godrick Olabo</h5>
              <h6 className="card-subtitle mb-2 text-muted">D33/48765/2017</h6>
              <table className="table table-hover">
                <tr>
                  <th>CourseWork</th>
                  <td>15 </td>
                </tr>
                <tr>
                  <th>Exam</th>
                  <td>48</td>
                </tr>
              </table>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
  )
}


export default StudentCard;