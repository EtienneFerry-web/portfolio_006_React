import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProjectOverlay from './components/ProjectOverlay'
import { CartProvider } from './context/CartContext'
import {
  Page1, Page2, Page3, Page4, Page5, Page6,
  Page7, Page8, Page9, Page10, Page11, Page12,
  Page13, Page14,
} from './Pages'

const pages = [
  { id: 1, Component: Page1 },
  { id: 2, Component: Page2 },
  { id: 3, Component: Page3 },
  { id: 4, Component: Page4 },
  { id: 5, Component: Page5 },
  { id: 6, Component: Page6 },
  { id: 7, Component: Page7 },
  { id: 8, Component: Page8 },
  { id: 9, Component: Page9 },
  { id: 10, Component: Page10 },
  { id: 11, Component: Page11 },
  { id: 12, Component: Page12 },
  { id: 13, Component: Page13 },
  { id: 14, Component: Page14 },
]

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const pageEls = container.querySelectorAll('[data-page]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage(Number(entry.target.getAttribute('data-page')))
          }
        })
      },
      { root: container, threshold: 0.5 },
    )
    pageEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function scrollToPage(pageId) {
    const container = scrollRef.current
    if (!container) return
    const target = container.querySelector(`[data-page="${pageId}"]`)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <CartProvider>
    <div className="h-screen overflow-hidden bg-white">
      <Navbar currentPage={currentPage} scrollToPage={scrollToPage} />

      <div
        ref={scrollRef}
        className="hide-scrollbar h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        {pages.map(({ id, Component }) => (
          <div key={id} data-page={id} className="snap-start">
            <Component
              onProjectClick={id === 7 || id === 8 ? setSelectedProject : undefined}
              scrollToPage={id === 2 || id === 14 ? scrollToPage : undefined}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectOverlay
          item={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
    </CartProvider>
  )
}
