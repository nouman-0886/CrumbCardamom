const items = [['Fresh every day', 'Everything is prepared fresh in small batches.'], ['Quality ingredients', 'We choose ingredients carefully for better taste.'], ['Made by hand', 'Classic baking techniques with attention to detail.'], ['Made for moments', 'Cakes and treats for everyday cravings and special occasions.']]
export default function WhyChooseUs() {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="section__head"><h2>Why people choose us</h2></div>
        <div className="why">{items.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>
    </section>
  )
}
