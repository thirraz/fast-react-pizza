import { useDispatch } from "react-redux"
import Button from "../../ui/Button"

import { deleteItem } from "../cart/cartSlice"

export default function DeletingItem({ pizzaId }) {
  const dispatch = useDispatch()

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  )
}
