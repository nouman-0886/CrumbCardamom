import Img from './Img'
import { images } from '../data/images'
export default function About() {
  return (
    <section id="story" className="section">
      <div className="container split">
        <Img src={images.story} alt="Hand-shaped loaves cooling on a wooden rack" className="split__img" />
        <div>
          <p className="eyebrow">Our story</p>
          <h2>More than just a bakery</h2>
          <p>We started in a small kitchen with one oven and a stubborn belief that bread should taste like something. Ten years on, we still shape, laminate and fill almost everything by hand.</p>
          <p>Traditional methods meet a modern eye: slow fermentation, real butter, seasonal fruit, and a counter that looks as good as it tastes.</p>
          <a href="#contact" className="btn btn--line">Discover Our Story</a>
        </div>
      </div>
    </section>
  )
}
