import React from 'react'


const Body = (props) => {
  return (
    <section className="body mt-4">    
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </section>
  )
}


export default Body;