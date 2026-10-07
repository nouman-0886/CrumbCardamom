import { useState } from 'react'
import { menu } from '../data/menu'
export default function Menu() {
  const cats = Object.keys(menu)
  const [active, setActive] = useState(cats[0])
  return (
    <section id="menu" className="section">
      <div className="container menu">
        <div className="section__head"><h2>From the counter</h2><p>A taste of what is in the case today.</p></div>
        <div className="tabs" role="tablist" aria-label="Menu categories">
          {cats.map(c => <button key={c} role="tab" aria-selected={c === active} className={c === active ? 'is-active' : ''} onClick={() => setActive(c)}>{c}</button>)}
        </div>
        <ul className="menu__list" role="tabpanel">
          {menu[active].map(([n, d, p]) => (
            <li key={n}><div className="menu__name"><strong>{n}</strong><span className="menu__dots" aria-hidden="true" /><span className="price">{p}</span></div><p>{d}</p></li>
          ))}
        </ul>
        <div className="center"><a href="#contact" className="btn btn--solid">View Full Menu</a></div>
      </div>
    </section>
  )
}
