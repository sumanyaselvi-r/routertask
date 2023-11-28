import React from 'react'


function Home({card}) {
  return (
    <>
      <div className='col-lg-4 mt-2'>
        
      <div className="card" >
  <img src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">{card.description}</p>
   
  </div>
</div>
</div>
    </>
  )
}

export default Home