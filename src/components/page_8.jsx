import { items } from '../data/items'

export default function Page8({ onProjectClick }) {
  const project = items[0]

  return (
    <div className="relative w-full h-screen bg-[#0f0f0f] overflow-hidden">
      {/* Background image */}
      <img
        src={project.cover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />

      {/* Section number top-right */}
      <div className="absolute top-16 right-8">
        <span className="text-[7vw] font-light text-white/15 leading-none select-none">08</span>
      </div>

      {/* Content — bottom left */}
      <div className="absolute bottom-14 left-8 right-8">
        {/* Meta */}
        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-5">
          {project.type} &mdash; {project.location} &mdash; {project.year}
        </p>

        {/* Title */}
        <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.82] text-white mb-7">
          {project.title}
        </h2>

        {/* Description excerpt */}
        <p className="text-[13px] leading-7 text-white/55 max-w-[480px] mb-8">
          {project.description.slice(0, 220)}&hellip;
        </p>

        {/* CTA button */}
        <button
          onClick={() => onProjectClick?.(project)}
          className="border border-white/30 text-[11px] uppercase tracking-widest text-white/60 px-6 py-3 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          Voir le projet →
        </button>
      </div>
    </div>
  )
}
