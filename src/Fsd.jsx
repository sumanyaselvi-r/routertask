import React from 'react'

function Fsd({ card1 }) {
  return (
    <>
      <div className='col-lg-4 mt-2'>
      <div className="card" >
        <img src={card1.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card1.title}</h5>
          <p className="card-text">{card1.description}</p>

        </div>
        </div>
      </div>


    </>
  )
}

export default Fsd