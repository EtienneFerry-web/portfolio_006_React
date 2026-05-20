export default function Page5() {
  return (
    <div className="relative w-full h-screen bg-[#111] overflow-hidden">
      {/* Full background photo */}
      <img
        src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&fit=crop&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
      />

      {/* Content center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
        {/* Section number */}
        <span className="text-[7vw] font-light text-white/20 leading-none select-none mb-2">
          05
        </span>

        {/* Giant keyword */}
        <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-[0.82] text-white select-none">
          LUMIÈRE
        </h2>

        {/* Manifeste text */}
        <div className="max-w-[55%] text-center mt-8">
          <p className="text-[13px] leading-7 text-gray-400">
            La photographie n'est pas la capture d'un instant — elle est la
            révélation de ce qui existe entre les instants. Chaque cadre est une
            décision, chaque ombre une intention. Nous travaillons avec la lumière
            comme un sculpteur travaille la pierre : en retirant ce qui n'est pas
            nécessaire pour que l'essentiel apparaisse. Ce qui importe n'est pas
            ce que l'on voit, mais ce que l'on ne voit pas encore.
          </p>
        </div>
      </div>
    </div>
  )
}
