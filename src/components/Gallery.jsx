import Img from './Img'
import { images as i } from '../data/images'
const shots = [[i.croissant, 'Croissants in a baking tray', 'g1'], [i.coffee, 'A flat white beside a pastry', 'g2'], [i.sourdough, 'Sliced sourdough loaf', 'g3'], [i.cake, 'Strawberry cream cake', 'g4'], [i.interior, 'Bakery counter and shelves', 'g5'], [i.cookies, 'Chocolate chunk cookies', 'g6'], [i.tart, 'Chocolate tart close-up', 'g7']]
export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section__head"><h2>A look inside</h2></div>
        <div className="gallery">{shots.map(([s, a, c]) => <Img key={c} src={s} alt={a} className={c} />)}</div>
      </div>
    </section>
  )
}
