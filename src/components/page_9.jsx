const steps = ['Repérage', 'Lumière', 'Prise de vue', 'Développement', 'Tirage']

export default function Page9() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Section number top-right — very large, pale */}
      <div className="absolute top-16 right-8 pointer-events-none">
        <span className="text-[10vw] font-light text-gray-100 leading-none select-none">09</span>
      </div>

      {/* Giant title top-center */}
      <div className="absolute top-[14%] left-0 right-0 text-center px-4">
        <h2 className="text-[9vw] font-black uppercase tracking-tighter leading-[0.85] text-black select-none">
          De l'idée
          <br />
          au tirage
        </h2>
      </div>

      {/* Small vertical photo bottom-left */}
      <div className="absolute bottom-0 left-8 w-[22%] h-[46%]">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&fit=crop&q=80"
          alt="Film négatif"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Bottom-right: badges + summary + round photo */}
      <div className="absolute bottom-10 right-8 max-w-[300px] flex flex-col items-end gap-4">
        {/* Step badges */}
        <div className="flex flex-wrap gap-2 justify-end">
          {steps.map((step) => (
            <span
              key={step}
              className="border border-gray-400 rounded-full px-2 h-5 text-[9px] uppercase tracking-widest text-gray-400 flex items-center"
            >
              {step}
            </span>
          ))}
        </div>

        {/* Summary text */}
        <p className="text-[11px] uppercase tracking-wider text-gray-500 text-right leading-5">
          De la recherche lumineuse au tirage
          <br />
          final, chaque étape est conduite
          <br />
          avec précision et intention.
        </p>

        {/* Round photo */}
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=200&fit=crop&q=80"
          alt="Photographe"
          className="w-14 h-14 rounded-full object-cover grayscale"
        />
      </div>
    </div>
  )
}
