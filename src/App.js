import React from 'react'
import ProductCard from './ProductCard'
import Navbar from './Navbar'
const App = () =>{

  const products = [
    {
      id: 1,
      name: "Luxury Pret Dyed Velvet Embroidered Shirt",
      photo: './images/pic1.jpg',
      oldPrice: 27990,
      newPrice: 19593,
      onSale: true,
      inStock: 3
    },
    {
      id: 2,
      name: "Luxury Pret Dyed Velvet Embroidered Shirt",
      photo: './images/pic2.jpg',
      oldPrice: 6690,
      newPrice: 3345,
      onSale: true,
      inStock: 7
    },
    {
      id: 3,
      name: "Printed Khaddar Shirt With Trousers",
      photo: './images/pic3.jpg',
      oldPrice: 4990,
      newPrice: 2495,
      onSale: false,
      inStock: 15
    },
    {
      id: 4,
      name: "Screen Printed Cambric Shirt",
      photo: './images/pic6.jpg',
      oldPrice: 7190,
      newPrice: 4314,
      onSale: true,
      inStock: 8
    },
    
  ]

  return(
    <>
      
      <Navbar />

      <div className='container'>
        <div className='row'>        
          {
            products.map(sProduct => <ProductCard data={sProduct}/>)
          }
      </div>
      </div>
    </>
  )
}
export default App;

// props ={
//   name: 'abc',
//   price: 123,
//   status: true
// }
// props.name
// {name, price, status} = props