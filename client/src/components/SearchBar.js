import React from 'react'

const SearchBar = () => {
  return (
    <div className="card mb-2" style={{"width": "26rem"}}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Search</span>
              </div>
              <input className="form-control" type="text" name="searchRec" placeholder="Type in Student Name or Reg. Number" aria-label="Search Student"/>
              
            </div>
          </div>
  )
}

export default SearchBar;
