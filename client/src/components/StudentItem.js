import React from 'react';

const StudentItem = ({count,item, onDelete}) => {
    const {REGNO, STUDENT_NAME, CSWK, EXAM, FINAL, GRADE} = item;
    return (
        <tr>
      <th scope="row">{count}</th>
      <td>{REGNO}</td>
      <td>{STUDENT_NAME}</td>
      <td>{CSWK}</td>
      <td>{EXAM}</td>
      <td>{FINAL}</td>
      <td>{GRADE}</td>
      <td>
        <button className="btn btn-danger btn-block" onClick={()=> onDelete(REGNO)}>
          Delete
        </button>
      </td>
    </tr>
    )
}

export default StudentItem;