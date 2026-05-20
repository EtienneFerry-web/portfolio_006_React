const sections = [
  { num: '03', title: 'À Propos', page: 3 },
  { num: '04', title: 'Collections', page: 4 },
  { num: '05', title: 'Manifeste', page: 5 },
  { num: '06', title: 'Histoire', page: 6 },
  { num: '07', title: 'Projets', page: 7 },
  { num: '08', title: 'En Vedette', page: 8 },
  { num: '09', title: 'Processus', page: 9 },
  { num: '10', title: 'Distinctions', page: 10 },
  { num: '11', title: 'Outils', page: 11 },
  { num: '12', title: 'Contact', page: 12 },
  { num: '13', title: 'Boutique', page: 13 },
  { num: '14', title: 'Panier', page: 14 },
]

export default function Page2({ scrollToPage }) {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Section label top-left */}
      <div className="absolute top-16 left-8">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">02 — Index</span>
      </div>

      {/* Small decorative photo — right center area */}
      <div className="absolute top-[12%] right-[340px] w-[190px] h-[250px]">
        <img
          src="https://images.unsplash.com/photo-1488229297931-28b5abd45546?w=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Table of contents — right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-16">
        <ul className="space-y-3">
          {sections.map((s) => (
            <li key={s.num}>
              <button
                onClick={() => scrollToPage?.(s.page)}
                className="flex items-baseline gap-8 group cursor-pointer"
              >
                <span className="text-[10px] text-gray-300 font-light w-6 shrink-0 group-hover:text-gray-500 transition-colors">
                  {s.num}
                </span>
                <span className="text-[13px] uppercase tracking-widest text-black font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  {s.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Giant title bottom-left */}
      <div className="absolute bottom-0 left-0 overflow-hidden">
        <h2 className="text-[17vw] font-black uppercase tracking-tighter leading-[0.82] text-black select-none">
          SOMMAIRE
        </h2>
      </div>
    </div>
  )
}
