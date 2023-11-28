import React from 'react'

function Cyber({card3}) {
  return (
    <>
    <div className='col-lg-4 mt-2'>
    <div className="card" >
      <img src={card3.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card3.title}</h5>
        <p className="card-text">{card3.description}</p>

      </div>
      </div>
    </div>


  </>
  )
}

export default Cyber