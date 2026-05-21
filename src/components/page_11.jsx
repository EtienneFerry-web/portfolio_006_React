export default function Page11() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Section number top */}
      <div className="absolute top-16 left-8">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">11 — Équipement</span>
      </div>

      {/* Giant title left */}
      <div className="absolute top-[20%] left-0 overflow-hidden">
        <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.85] text-black select-none">
          NOS
          <br />
          OUTILS
        </h2>
      </div>

      {/* Narrow center frame with image — tall, bordered */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[12%] h-[76%] border-[3px] border-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=800&fit=crop&q=80"
          alt="Objectif"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Full-height photo right */}
      <div className="absolute right-0 top-0 w-[32%] h-full">
        <img
          src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&fit=crop&q=80"
          alt="Équipement studio"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Summary text bottom-left */}
      <div className="absolute bottom-10 left-8 max-w-[280px]">
        <p className="text-[11px] uppercase tracking-widest font-bold text-black leading-6">
          Leica. Hasselblad.
          <br />
          Chambre 4×5. Labo argentique.
          <br />
          Tirages baryté main.
        </p>
      </div>
    </div>
  )
}
