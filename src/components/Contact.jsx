export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container split">
        <div>
          <h2>Visit the bakery</h2>
          <dl className="info">
            <dt>Crumb &amp; Cardamom</dt><dd>14 Garden Avenue, Main Boulevard<br />Lahore, Pakistan</dd>
            <dt>Phone</dt><dd><a href="tel:+920000000000">+92 300 000 0000</a></dd>
            <dt>Email</dt><dd><a href="mailto:hello@crumbandcardamom.pk">hello@crumbandcardamom.pk</a></dd>
            <dt>Opening hours</dt><dd>Mon – Sat: 8:00 AM – 10:00 PM<br />Sunday: 9:00 AM – 9:00 PM</dd>
          </dl>
        </div>
        <div className="map" role="img" aria-label="Stylised map showing the bakery location">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d="M0 220 L400 150 M120 0 L190 300 M0 90 L400 120 M300 0 L260 300" />
            <circle cx="200" cy="150" r="9" className="pin" />
          </svg>
          <div className="map__card"><strong>Crumb &amp; Cardamom</strong><span>14 Garden Avenue</span></div>
        </div>
      </div>
    </section>
  )
}
