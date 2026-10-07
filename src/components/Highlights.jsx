const items = [['Freshly Baked', 'Every morning'], ['Premium Ingredients', 'Real butter, real vanilla'], ['Handcrafted', 'With care, never rushed'], ['Made For Every Occasion', 'From a Tuesday to a wedding']]
export default function Highlights() {
  return (
    <section className="strip" aria-label="Highlights">
      <ul className="container strip__list">
        {items.map(([t, s]) => <li key={t}><strong>{t}</strong><span>{s}</span></li>)}
      </ul>
    </section>
  )
}
