import { Divider } from 'semantic-ui-react'
import { Layout } from '@components/Layout/Layout'
import { CartItemList } from '@components/CardItemList'
import { CartSummary } from '@components/CartSummary'
import { useCart, useCartMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout title="Cart">
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary totalAmount={count} />
    </Layout>
  )
}

export default CartPage
