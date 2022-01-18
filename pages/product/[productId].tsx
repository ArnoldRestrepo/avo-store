import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@components/Layout'
import fetch from 'isomorphic-unfetch'
import ProductSummary from '@components/ProductSummary'

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()
  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setProduct(data)
        })
    }
  }, [productId])
  return <Layout>{product == null ? null : <ProductSummary product={product} />}</Layout>
}

export default ProductItem
