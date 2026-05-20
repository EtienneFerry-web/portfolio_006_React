import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Page14({ scrollToPage }) {
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart()
  const [ordered, setOrdered] = useState(false)

  function handleOrder() {
    setOrdered(true)
    clearCart()
  }

  const bgNumber = (
    <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none">
      <span className="text-[20vw] font-black text-gray-50 leading-none select-none">14</span>
    </div>
  )

  if (ordered) {
    return (
      <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Commande confirmée</p>
        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-black text-center">
          Merci
        </h2>
        <p className="text-[11px] uppercase tracking-widest text-gray-400 mt-6">
          Votre commande a été transmise à l'atelier.
        </p>
        <button
          onClick={() => { setOrdered(false); scrollToPage?.(13) }}
          className="mt-10 text-[10px] uppercase tracking-widest border border-gray-200 px-4 py-2 text-gray-400 hover:border-black hover:text-black transition-colors cursor-pointer"
        >
          ← Retour boutique
        </button>
        {bgNumber}
      </div>
    )
  }

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="pt-14 px-8 pb-4 border-b border-gray-100 flex justify-between items-baseline shrink-0">
        <div>
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-black">Panier</h2>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Récapitulatif de commande</p>
        </div>
        {cart.length > 0 && (
          <span className="text-[10px] uppercase tracking-widest text-gray-400">
            {cart.reduce((s, l) => s + l.qty, 0)} article{cart.reduce((s, l) => s + l.qty, 0) > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-8 py-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-300">Panier vide</p>
            <button
              onClick={() => scrollToPage?.(13)}
              className="text-[10px] uppercase tracking-widest border border-gray-200 px-4 py-2 text-gray-400 hover:border-black hover:text-black transition-colors cursor-pointer"
            >
              ← Voir la boutique
            </button>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-gray-100 max-w-2xl">
            {cart.map((line) => (
              <div key={line.key} className="flex items-center gap-6 py-5">
                {/* Thumb */}
                <div className="w-16 h-16 shrink-0 overflow-hidden">
                  <img
                    src={line.item.cover}
                    alt={line.item.title}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] uppercase tracking-widest text-gray-400">{line.item.type}</p>
                  <p className="text-[13px] uppercase tracking-wider font-medium text-black truncate">{line.item.title}</p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-0.5">{line.format.label}</p>
                </div>

                {/* Qty */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => updateQty(line.key, line.qty - 1)}
                    className="w-6 h-6 border border-gray-200 text-[11px] text-gray-400 hover:border-black hover:text-black transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Diminuer la quantité"
                  >
                    −
                  </button>
                  <span className="text-[12px] w-4 text-center">{line.qty}</span>
                  <button
                    onClick={() => updateQty(line.key, line.qty + 1)}
                    className="w-6 h-6 border border-gray-200 text-[11px] text-gray-400 hover:border-black hover:text-black transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <span className="text-[13px] font-medium text-black w-16 text-right shrink-0">
                  €{(line.format.price * line.qty).toLocaleString('fr-FR')}
                </span>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(line.key)}
                  className="text-[11px] text-gray-300 hover:text-black transition-colors cursor-pointer shrink-0"
                  aria-label="Supprimer l'article"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {cart.length > 0 && (
        <div className="shrink-0 px-8 py-6 border-t border-gray-100 flex items-center justify-between max-w-2xl w-full">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-gray-400">Total</p>
            <p className="text-[22px] font-black text-black">
              €{total.toLocaleString('fr-FR')}
            </p>
            <p className="text-[9px] text-gray-400 mt-0.5">Livraison offerte — Éditions numérotées et signées</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={handleOrder}
              className="text-[10px] uppercase tracking-widest bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Passer commande →
            </button>
            <button
              onClick={() => scrollToPage?.(13)}
              className="text-[9px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer"
            >
              ← Continuer mes achats
            </button>
          </div>
        </div>
      )}

      {bgNumber}
    </div>
  )
}
