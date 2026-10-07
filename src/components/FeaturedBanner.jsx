import Img from './Img'
import { images } from '../data/images'
export default function FeaturedBanner() {
  return (
    <section className="banner">
      <Img src={images.banner} alt="A layered chocolate celebration cake" className="banner__img" />
      <div className="banner__shade" />
      <div className="container banner__content">
        <h2>Freshly baked.<br />Beautifully made.</h2>
        <p>Custom celebration cakes, boxed treats and party orders. Order 48 hours ahead for custom designs.</p>
        <a href="#menu" className="btn btn--cream">View Full Menu</a>
      </div>
    </section>
  )
}
