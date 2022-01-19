import fetch from 'isomorphic-unfetch'
import { Layout } from '@components/Layout'
import ProductList from '@components/ProductList'

const Home = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <ProductList products={productList} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://avo-store-plum.vercel.app/api/avo/')
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList,
    },
  }
}

export default Home
