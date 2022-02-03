import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

export const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ))

export const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)
