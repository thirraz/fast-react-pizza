import { formatCurrency } from "../../utils/helpers"
import DeletingItem from "./DeletingItem"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  return (
    <li className="justify-between py-3 sm:flex sm:items-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <DeletingItem pizzaId={pizzaId} />
      </div>
    </li>
  )
}

export default CartItem
