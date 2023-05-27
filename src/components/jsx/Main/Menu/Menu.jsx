import Product from './Product'
import Cart from './Cart'


export default function Menu(){
  return(
    <section className="menu">
      <div className="menu-container">
        <Product/>
        <Cart/>
      </div>
    </section>
  )
}