import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Layout } from '@components/Layout'
import ProductList from '@components/ProductList'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    fetch('/api/avo/')
      .then((res) => res.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
      <ProductList products={productList} />
    </Layout>
  )
}

export default Home
