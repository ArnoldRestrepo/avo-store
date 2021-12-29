
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"


const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>()
  useEffect(() => {
    window.fetch('/api/avo/')
      .then(res => res.json())
      .then(({ data }) => { 
        setProductList(data)
      });
  }, [])
  
  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      <ul>
        {productList && productList.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home