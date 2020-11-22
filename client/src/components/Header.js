import React from 'react'
import LoadFile from "./LoadFile";

const Header = () => {
  return (
    <section className="header bg-primary text-white mt-4">
      <div className="spacer">
        &nbsp;
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6"><h3 className="display-4">Welcome Michael</h3></div>
        <div className="col-6 p-2">
          <LoadFile/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header;