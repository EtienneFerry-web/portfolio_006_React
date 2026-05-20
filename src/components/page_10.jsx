const stats = [
  { value: '15', label: "Ans d'activité" },
  { value: '143', label: 'Séries produites' },
  { value: '12', label: 'Galeries partenaires' },
  { value: '4', label: 'Prix internationaux' },
]

const awards = [
  { year: '2023', title: 'Grand Prix de la Photographie', context: "Rencontres d'Arles" },
  { year: '2021', title: "Prix de l'Image Documentaire", context: 'Visa pour l\'Image' },
  { year: '2019', title: 'Bourse de la Création Photographique', context: 'Institut Français' },
  { year: '2017', title: 'Prix du Jury — Série inédite', context: 'Mois de la Photo' },
]

export default function Page10() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Header */}
      <div className="absolute top-14 left-8 right-8 flex justify-between items-baseline border-b border-gray-100 pb-4">
        <h2 className="text-[11px] uppercase tracking-widest font-bold text-black">
          Distinctions
        </h2>
        {/* Giant section number — pale */}
        <span className="text-[7vw] font-black text-gray-100 leading-none select-none -mb-2">10</span>
      </div>

      {/* Stats grid — 4 columns */}
      <div className="absolute top-[110px] left-8 right-8 grid grid-cols-4 gap-4 border-b border-gray-100 pb-10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <span className="text-[6vw] font-black text-black leading-none">{s.value}</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Awards list */}
      <div className="absolute top-[310px] left-8 right-8">
        {awards.map((a) => (
          <div
            key={a.year + a.title}
            className="grid grid-cols-[80px_1fr_1fr] items-baseline border-b border-gray-100 py-4"
          >
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">{a.year}</span>
            <span className="text-[12px] text-black uppercase tracking-wider font-medium">{a.title}</span>
            <span className="text-[11px] text-gray-400 text-right">{a.context}</span>
          </div>
        ))}
      </div>

      {/* Decorative bottom-right image */}
      <div className="absolute bottom-0 right-8 w-[200px] h-[200px]">
        <img
          src="https://images.unsplash.com/photo-1452378174528-537c1ff1b4cd?w=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  )
}
