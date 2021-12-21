import { useRouter } from 'next/router';

const ProductItem = () => {
  const {query: {productId}} = useRouter();
  return(
    <div className="product-item">
      <h1>{productId}</h1>
      <p>Página del producto</p>
    </div>
  )
}

export default ProductItem;