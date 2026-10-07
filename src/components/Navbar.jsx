import { useEffect, useState } from 'react'
const links = [['Home', '#home'], ['Our Story', '#story'], ['Menu', '#menu'], ['Specialties', '#specialties'], ['Gallery', '#gallery'], ['Contact', '#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <header className={`nav ${scrolled ? 'nav--compact' : ''}`}>
      <div className="container nav__bar">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>Crumb <span>&amp;</span> Cardamom</a>
        <nav id="site-nav" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#contact" className="btn btn--solid nav__cta-mobile" onClick={() => setOpen(false)}>Order Now</a>
        </nav>
        <a href="#contact" className="btn btn--solid nav__cta">Order Now</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  )
}
