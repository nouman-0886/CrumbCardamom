export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><p className="logo logo--light">Crumb <span>&amp;</span> Cardamom</p><p>Small-batch breads, pastries and cakes, baked fresh every morning.</p></div>
        <nav aria-label="Footer"><h3>Explore</h3><a href="#story">Our Story</a><a href="#menu">Menu</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav>
        <div><h3>Hours</h3><p>Mon – Sat: 8 AM – 10 PM<br />Sun: 9 AM – 9 PM</p><p>+92 300 000 0000</p></div>
        <div><h3>Follow</h3><a href="#" aria-label="Instagram">Instagram</a><a href="#" aria-label="Facebook">Facebook</a><a href="#" aria-label="WhatsApp">WhatsApp</a></div>
      </div>
      <p className="container footer__copy">© 2026 Crumb &amp; Cardamom. All rights reserved.</p>
    </footer>
  )
}
