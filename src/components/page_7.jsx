import { useState } from 'react'
import { items } from '../data/items'

export default function Page7({ onProjectClick }) {
  const [hoveredId, setHoveredId] = useState(null)
  const hoveredItem = items.find((i) => i.id === hoveredId)

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Header */}
      <div className="absolute top-14 left-8 right-8 flex justify-between items-baseline border-b border-gray-100 pb-4">
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-black">Projets</h2>
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          {items.length} réalisations
        </span>
      </div>

      {/* Hover thumbnail — fixed center, pointer-events-none */}
      {hoveredItem && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[180px] pointer-events-none z-20 transition-all duration-200">
          <img
            src={hoveredItem.cover}
            alt=""
            className="w-full h-full object-cover grayscale shadow-2xl"
          />
        </div>
      )}

      {/* List */}
      <div className="absolute top-[110px] left-0 right-0">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onProjectClick?.(item)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="w-full flex items-center gap-6 px-8 py-5 border-b border-gray-100 hover:bg-gray-50/80 transition-all group text-left"
          >
            {/* Number */}
            <span className="text-[10px] text-gray-300 font-light w-5 shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Title */}
            <span className="text-[14px] uppercase tracking-wider text-black font-medium flex-1 group-hover:translate-x-2 transition-transform duration-200">
              {item.title}
            </span>

            {/* Type */}
            <span className="text-[10px] uppercase tracking-widest text-gray-400 w-36 shrink-0 hidden md:block">
              {item.type}
            </span>

            {/* Location */}
            <span className="text-[10px] text-gray-400 w-28 shrink-0 text-right hidden lg:block">
              {item.location}
            </span>

            {/* Year */}
            <span className="text-[10px] text-gray-400 w-10 shrink-0 text-right">
              {item.year}
            </span>

            {/* Arrow */}
            <span className="text-[13px] text-gray-300 group-hover:text-black transition-colors duration-200 ml-2">
              →
            </span>
          </button>
        ))}
      </div>

      {/* Giant number background */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none">
        <span className="text-[20vw] font-black text-gray-50 leading-none select-none">07</span>
      </div>
    </div>
  )
}
