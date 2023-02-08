import React from 'react'

const ProductCard = ({data}) => {
    const {photo, name, newPrice} = data
  return (
    <>
            <div className='col-lg-3 col-md-6 col-12'>               
                  <div className="card" style={{width: '18rem'}}>
                    <img src={photo} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{newPrice}</p>
                      <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                  </div>
              </div>
    </>
  )
}

export default ProductCard
