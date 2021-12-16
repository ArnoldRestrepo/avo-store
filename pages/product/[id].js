import {useRouter} from 'next/router';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h1>{product}</h1>
    </div>
  )
}

export default ProductItem;