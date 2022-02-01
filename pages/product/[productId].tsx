import { Layout } from '@components/Layout'
import fetch from 'isomorphic-unfetch'
import ProductSummary from '@components/ProductSummary'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avocados.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id: productId }) => ({
    params: {
      productId,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.productId as string
  const response = await fetch(
    `https://avo-store-plum.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()

  return {
    props: { product },
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductItem
