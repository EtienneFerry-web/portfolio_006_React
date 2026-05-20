const services = [
  'Photographie de paysage',
  'Portraits documentaires',
  'Architecture & espaces',
  'Commandes éditoriales',
  "Tirages d'art sur mesure",
]

export default function Page4() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Full-height photo left */}
      <div className="absolute left-0 top-0 w-[55%] h-full">
        <img
          src="https://images.unsplash.com/photo-1509909756405-be0199742c45?w=800&fit=crop&q=80"
          alt="Studio"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Section number top-right */}
      <div className="absolute top-16 right-8">
        <span className="text-[10vw] font-light text-gray-100 select-none leading-none">04</span>
      </div>

      {/* Title overlapping photo + right side */}
      <div className="absolute top-[20%] left-[44%]">
        <h2 className="text-[7vw] font-black uppercase tracking-tighter leading-[0.85] text-black">
          NOS
          <br />
          COLLECTIONS
        </h2>
      </div>

      {/* Services list bottom-right */}
      <div className="absolute bottom-16 right-8 max-w-[220px] text-right">
        <ul className="space-y-3">
          {services.map((s) => (
            <li key={s} className="text-[11px] uppercase tracking-widest text-gray-500 border-b border-gray-100 pb-3">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Small description bottom-right below list */}
      <div className="absolute bottom-8 right-8 max-w-[220px] text-right">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          Du premier repérage au tirage final
        </p>
      </div>
    </div>
  )
}
