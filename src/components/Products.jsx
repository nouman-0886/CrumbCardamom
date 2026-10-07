import Img from './Img'
import { products } from '../data/products'
export default function Products() {
  return (
    <section id="specialties" className="section section--tint">
      <div className="container">
        <div className="section__head"><h2>Our signature bakes</h2><p>The ones people come back for.</p></div>
        <div className="products">
          {products.map(p => (
            <article key={p.name} className="product">
              <div className="product__img"><Img src={p.image} alt={`${p.name} at Crumb & Cardamom`} /></div>
              <div className="product__row"><h3>{p.name}</h3><span className="price">{p.price}</span></div>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
