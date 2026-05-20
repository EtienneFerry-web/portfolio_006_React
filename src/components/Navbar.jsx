import { useCart } from '../context/CartContext'

export default function Navbar({ currentPage, scrollToPage }) {
  const pageStr = String(currentPage).padStart(2, '0')
  const { count } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="flex items-center justify-between px-8 h-11">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">
          Obscura
        </span>

        <div className="hidden md:flex items-center gap-8">
          <span className="text-[11px] uppercase tracking-widest text-gray-400">Paris, France</span>
          <button
            onClick={() => scrollToPage(13)}
            className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer"
          >
            Boutique
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => scrollToPage(14)}
            className="text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer flex items-center gap-2"
          >
            Panier
            {count > 0 && (
              <span className="w-4 h-4 rounded-full bg-black text-white text-[9px] flex items-center justify-center leading-none">
                {count}
              </span>
            )}
          </button>
          <span className="text-[11px] uppercase tracking-widest text-gray-400">
            {pageStr}
          </span>
        </div>
      </div>
    </nav>
  )
}
