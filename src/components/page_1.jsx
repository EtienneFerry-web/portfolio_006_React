export default function Page1() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Badges top-left */}
      <div className="absolute top-16 left-8 flex flex-col gap-2 z-10">
        {['Paris', 'Est. 2011', "Studio d'Art"].map((label) => (
          <span
            key={label}
            className="border border-gray-400 rounded-full px-2 h-5 text-[9px] uppercase tracking-widest text-gray-400 flex items-center w-fit"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Central hero image — objet signature */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[6%] w-[28%] h-[65%]">
        <img
          src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&fit=crop&q=80"
          alt="Appareil photographique"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Tagline bottom-left */}
      <div className="absolute bottom-8 left-8">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          Photographie d'Art — Séries — Tirages
        </p>
      </div>

      {/* Giant title bottom-right — débordement volontaire */}
      <div className="absolute bottom-0 right-0 overflow-hidden leading-none">
        <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-[0.82] text-black select-none">
          OBSCURA
        </h1>
      </div>
    </div>
  )
}
