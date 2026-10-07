import { testimonials } from '../data/testimonials'
export default function Testimonials() {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="section__head"><h2>Kind words</h2></div>
        <div className="quotes">
          {testimonials.map(t => (
            <figure key={t.name}>
              <div className="stars" role="img" aria-label={`${t.rating} out of 5 stars`}>{'★'.repeat(t.rating)}</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption><strong>{t.name}</strong>, {t.place}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
