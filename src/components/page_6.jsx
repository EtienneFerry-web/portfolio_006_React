export default function Page6() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Section number top-right */}
      <div className="absolute top-16 right-8">
        <span className="text-[10vw] font-light text-gray-100 select-none leading-none">06</span>
      </div>

      {/* Short text top-left */}
      <div className="absolute top-20 left-8 max-w-[320px]">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">
          Paris — Fondé en 2011
        </p>
        <p className="text-[12px] leading-6 text-gray-500">
          Depuis plus de quinze ans, OBSCURA documente le monde avec une
          exigence formelle constante. Né d'une rencontre entre deux
          photographes formés aux Beaux-Arts, le studio a construit au fil
          du temps une œuvre cohérente, reconnaissable, ancrée dans une
          tradition documentaire héritée de Cartier-Bresson et Salgado,
          mais résolument contemporaine dans ses questionnements.
        </p>
      </div>

      {/* Full-height photo — right, bottom-aligned */}
      <div className="absolute right-0 bottom-0 w-[42%] h-[80%]">
        <img
          src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=800&fit=crop&q=80"
          alt="Darkroom"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Giant title bottom-left */}
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <h2 className="text-[14vw] font-black uppercase tracking-tighter leading-[0.82] text-black select-none">
          HISTOIRE
        </h2>
      </div>
    </div>
  )
}
