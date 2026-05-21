import { useState } from 'react'
import { items } from '../data/items'
import { useCart } from '../context/CartContext'

const formats = [
  { label: '30×40 cm', price: 180 },
  { label: '50×70 cm', price: 320 },
  { label: '80×100 cm', price: 580 },
]

const papers = [
  { label: 'Pigmentaire', priceAdd: 0 },
  { label: 'Baryté', priceAdd: 50 },
]

export default function Page13() {
  const { addToCart } = useCart()
  const [selectedFormat, setSelectedFormat] = useState({})
  const [selectedPaper, setSelectedPaper] = useState({})
  const [added, setAdded] = useState({})

  function getFormat(itemId) {
    return selectedFormat[itemId] ?? formats[0]
  }

  function getPaper(itemId) {
    return selectedPaper[itemId] ?? papers[0]
  }

  function handleAdd(item) {
    addToCart(item, getFormat(item.id), getPaper(item.id))
    setAdded((prev) => ({ ...prev, [item.id]: true }))
    setTimeout(() => setAdded((prev) => ({ ...prev, [item.id]: false })), 1200)
  }

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="pt-14 px-8 pb-4 border-b border-gray-100 flex justify-between items-baseline shrink-0">
        <div>
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-black">Boutique</h2>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Tirages d'art — Éditions limitées</p>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          {items.length} séries disponibles
        </span>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border-b border-gray-100">
          {items.map((item) => {
            const fmt = getFormat(item.id)
            const ppr = getPaper(item.id)
            const linePrice = fmt.price + ppr.priceAdd
            const isPreorder = item.stock === 0

            return (
              <div key={item.id} className="bg-white flex flex-col group">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <span className="text-[9px] uppercase tracking-widest bg-white/90 text-gray-500 px-2 py-0.5">
                      {item.status}
                    </span>
                    {item.stock > 0 && item.stock <= 5 && (
                      <span className="text-[9px] uppercase tracking-widest bg-black text-white px-2 py-0.5">
                        Derniers
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400">{item.type} — {item.year}</p>
                    <h3 className="text-[13px] uppercase tracking-wider font-medium text-black mt-0.5">{item.title}</h3>
                    <p className="text-[9px] uppercase tracking-widest text-gray-300 mt-1">
                      {isPreorder ? 'Précommande ouverte' : `${item.stock} ex. restants`}
                    </p>
                  </div>

                  {/* Format selector */}
                  <div className="flex gap-1">
                    {formats.map((f) => (
                      <button
                        key={f.label}
                        onClick={() => setSelectedFormat((prev) => ({ ...prev, [item.id]: f }))}
                        className={`text-[9px] uppercase tracking-widest px-2 py-1 border transition-colors cursor-pointer ${
                          fmt.label === f.label
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 text-gray-400 hover:border-gray-400'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  {/* Paper selector */}
                  <div className="flex gap-1">
                    {papers.map((p) => (
                      <button
                        key={p.label}
                        onClick={() => setSelectedPaper((prev) => ({ ...prev, [item.id]: p }))}
                        className={`text-[9px] uppercase tracking-widest px-2 py-1 border transition-colors cursor-pointer ${
                          ppr.label === p.label
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 text-gray-400 hover:border-gray-400'
                        }`}
                      >
                        {p.label}
                        {p.priceAdd > 0 && (
                          <span className="ml-1 text-[8px] opacity-60">+{p.priceAdd}€</span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Price + Add */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                    <span className="text-[13px] font-medium text-black">€{linePrice}</span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`text-[9px] uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 cursor-pointer ${
                        added[item.id]
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 text-gray-500 hover:border-black hover:text-black'
                      }`}
                    >
                      {added[item.id] ? '✓ Ajouté' : isPreorder ? 'Précommande' : '+ Panier'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Giant number background */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none">
        <span className="text-[20vw] font-black text-gray-50 leading-none select-none">13</span>
      </div>
    </div>
  )
}
