import React from 'react'

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
          <p className="lead">Load an Excel document to begin..</p>
          <form >
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="xlFile"/>
              <label className="custom-file-label" htmlFor="xlFile">Choose file</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header;