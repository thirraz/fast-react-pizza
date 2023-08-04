import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload)

      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload)

      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state, action) {
      state.cart = []
    },
  },
})

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curItem) => sum + curItem.quantity, 0)

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curItem) => sum + curItem.totalPrice, 0)

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
