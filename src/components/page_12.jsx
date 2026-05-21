const columns = [
  {
    num: '01',
    label: 'Adresse',
    lines: ['12 Rue des Artistes', '75014 Paris', 'France'],
  },
  {
    num: '02',
    label: 'Téléphone',
    lines: ['+33 1 42 36 58 90', 'Lun — Ven', '10h — 18h'],
  },
  {
    num: '03',
    label: 'Contact',
    lines: ['contact@obscura-studio.fr', 'presse@obscura-studio.fr', '@obscura.paris'],
  },
]

export default function Page12() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Giant "INFO" title top-left */}
      <div className="absolute top-0 left-0 overflow-hidden">
        <h2 className="text-[16vw] font-black uppercase tracking-tighter leading-[0.82] text-black select-none">
          INFO
        </h2>
      </div>

      {/* 3 columns bottom-left */}
      <div className="absolute bottom-14 left-8 flex gap-20">
        {columns.map((col) => (
          <div key={col.num} className="flex flex-col gap-2">
            <span className="text-[11px] font-bold text-black uppercase tracking-widest">
              {col.num}
            </span>
            <span className="text-[11px] font-bold text-black uppercase tracking-widest mb-1">
              {col.label}
            </span>
            {col.lines.map((line) => (
              <span key={line} className="text-[10px] text-gray-500 leading-5">
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Decorative photo bottom-right */}
      <div className="absolute bottom-0 right-0 w-[36%] h-[65%]">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Footer tag */}
      <div className="absolute bottom-4 left-8">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          OBSCURA © 2011 — {new Date().getFullYear()}
        </span>
      </div>
    </div>
  )
}
