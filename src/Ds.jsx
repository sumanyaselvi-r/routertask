import React from 'react'

function Ds({card2}) {
  return (
    <>
    <div className='col-lg-4 mt-2'>
    <div className="card" >
      <img src={card2.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card2.title}</h5>
        <p className="card-text">{card2.description}</p>

      </div>
      </div>
    </div>


  </>
  )
}

export default Ds