import Img from './Img'
import { images } from '../data/images'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">Baked fresh daily</p>
          <h1>Made with love,<br />baked with purpose.</h1>
          <p className="lead">Fresh breads, pastries, cakes and desserts, made in small batches every morning with ingredients we are proud to put our name on.</p>
          <div className="btn-row">
            <a href="#menu" className="btn btn--solid">Explore Our Menu</a>
            <a href="#contact" className="btn btn--line">Order Now</a>
          </div>
        </div>
        <div className="hero__media">
          <Img src={images.hero} alt="Golden butter croissants fresh from the oven" eager />
          <div className="hero__badge">Since 2014<br /><strong>Small batches. Every morning.</strong></div>
        </div>
      </div>
    </section>
  )
}
