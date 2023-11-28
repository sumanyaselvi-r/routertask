import React from 'react'

function Career({card4}) {
  return (
    <>
    <div className='col-lg-4 mt-2'>
    <div className="card" >
      <img src={card4.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card4.title}</h5>
        <p className="card-text">{card4.description}</p>

      </div>
      </div>
    </div>


  </>
  )
}

export default Career