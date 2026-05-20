export default function Page3() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Large section number — top center */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2">
        <span className="text-[10vw] font-light text-gray-100 select-none leading-none">03</span>
      </div>

      {/* Tagline bold uppercase — center */}
      <div className="absolute top-[30%] left-8 max-w-[380px]">
        <p className="text-[12px] uppercase tracking-widest font-bold text-black leading-7">
          Témoins de l'instant,
          <br />
          Architectes du regard
        </p>
        <div className="w-8 h-px bg-black mt-4 mb-6" />
        <p className="text-[12px] leading-6 text-gray-500">
          Fondé à Paris en 2011, OBSCURA est un studio de photographie d'art
          spécialisé dans la production de séries documentaires, de portraits
          et de paysages en noir et blanc. Notre travail explore les tensions
          entre lumière et ombre, entre mémoire et présence, entre le geste
          technique et l'intuition poétique.
        </p>
      </div>

      {/* Portrait photo — right, tall */}
      <div className="absolute right-0 bottom-0 w-[40%] h-[76%]">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&fit=crop&q=80"
          alt="Portrait"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Giant title bottom-left */}
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <h2 className="text-[14vw] font-black uppercase tracking-tighter leading-[0.82] text-black select-none">
          À PROPOS
        </h2>
      </div>
    </div>
  )
}
