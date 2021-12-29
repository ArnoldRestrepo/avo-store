import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const { query: { productId } } = useRouter();
  const [product, setProduct] = useState<TProduct>();
  useEffect(() => {
    if (productId) {
      window.fetch(`/api/avo/${productId}`)
        .then(res => res.json())
        .then((data ) => {
          console.log(data);
          setProduct(data);
        }); 
    }
  }, [productId])
  return(
    <div className="product-item">
      <h1>{product?.name}</h1>
      <img src={product?.image} alt={product?.name}/>
      <p>Producto {product?.id}</p>
    </div>
  )
}

export default ProductItem;