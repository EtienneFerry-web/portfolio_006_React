import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(item, format) {
    setCart((prev) => {
      const key = `${item.id}-${format.label}`
      const existing = prev.find((l) => l.key === key)
      if (existing) {
        return prev.map((l) => l.key === key ? { ...l, qty: l.qty + 1 } : l)
      }
      return [...prev, { key, item, format, qty: 1 }]
    })
  }

  function removeFromCart(key) {
    setCart((prev) => prev.filter((l) => l.key !== key))
  }

  function updateQty(key, qty) {
    if (qty < 1) { removeFromCart(key); return }
    setCart((prev) => prev.map((l) => l.key === key ? { ...l, qty } : l))
  }

  function clearCart() {
    setCart([])
  }

  const total = cart.reduce((sum, l) => sum + l.format.price * l.qty, 0)
  const count = cart.reduce((sum, l) => sum + l.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
