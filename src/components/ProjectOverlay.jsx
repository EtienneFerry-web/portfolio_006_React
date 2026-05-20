import { useState, useEffect } from 'react'

export default function ProjectOverlay({ item, onClose }) {
  const [activeImage, setActiveImage] = useState(0)
  const allImages = [item.cover, ...item.images]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-white overlay-enter">
      <div className="flex h-full">
        {/* Left — 58% — image viewer */}
        <div className="w-[58%] h-full flex flex-col bg-gray-50">
          {/* Main image */}
          <div className="flex-1 overflow-hidden">
            <img
              src={allImages[activeImage]}
              alt={item.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Thumbnails strip */}
          <div className="flex gap-2 p-3 bg-white border-t border-gray-100">
            {allImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`aspect-video w-24 shrink-0 overflow-hidden border-2 transition-colors cursor-pointer ${
                  i === activeImage ? 'border-black' : 'border-transparent'
                }`}
              >
                <img
                  src={src.replace('w=1200', 'w=300').replace('w=800', 'w=300')}
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right — 42% — details */}
        <div className="w-[42%] h-full overflow-y-auto flex flex-col px-12 py-10 border-l border-gray-100">
          {/* Close button */}
          <button
            onClick={onClose}
            className="self-end text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8 cursor-pointer"
          >
            × Fermer
          </button>

          {/* Number + type */}
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
            {String(item.id).padStart(2, '0')} — {item.type}
          </p>

          {/* Giant title */}
          <h2 className="text-[5vw] font-black uppercase tracking-tighter leading-[0.85] text-black mb-8">
            {item.title}
          </h2>

          {/* Metadata grid 2×2 */}
          <div className="grid grid-cols-2 gap-px border border-gray-100 mb-8">
            {[
              { label: 'Localisation', value: item.location },
              { label: 'Année', value: item.year },
              { label: 'Tirages', value: item.surface },
              { label: 'Statut', value: item.status },
            ].map(({ label, value }) => (
              <div key={label} className="p-4 border border-gray-100">
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                <p className="text-[12px] text-black font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[13px] leading-7 text-gray-600 flex-1">{item.description}</p>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              OBSCURA — {item.year} &nbsp;|&nbsp; {item.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
