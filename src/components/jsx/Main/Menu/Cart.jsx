

export function QuantityCount(){
  return(
    <>
      <span className="quantity-btn minus cursor-pointer">-</span>
      <input type="number" className="quantity-count" placeholder="1"/>
      {/* <span className="quantity-count">1</span> */}
      <span className="quantity-btn cursor-pointer">+</span>
    </>
  )
}

function ShoppingBagItem({className}){
  return(
    <li className={`${className}-item`} data-count="0" data-price="150">
      <div>
        <p className={`${className}-item-title`}>Yogurt with Bake Granola and Fruits</p>
        <div className={`${className}-item-body`}>
          <p className={`${className}-item-price`}>$ 150</p>
          <div className={`${className}-item-quantity`}>
            <QuantityCount/>
          </div>
          <p className={`${className}-item-total-price`}>$ 150</p>
        </div>
      </div>
      <a href="" className={`${className}-item-delete`}>&#10005;</a>
    </li>
  )
}

export default function Cart(){
  return(
    <section className="cart">
      <div className="cart-container">
        <h3 className="cart-title title">Shopping Bag</h3>
        <div className="cart-body">
          <section className="shopping-bag">
            <div className="shopping-bag-container">
              <ul className="shopping-bag-list">
                <ShoppingBagItem className="shopping-bag"/>
              </ul>
            </div>
          </section>
          <section className="shopping-sum">
            <div className="shopping-sum-container">
              <h5 className="shopping-sum-title">Order Summary</h5>
              <div className="shopping-sum-body">
                <p className="sum-price">Price: <span className="price">150</span></p>
                <p className="sum-shipping-price">Shipping: <span className="shipping-price">80</span></p>
                <p className="sum-tax">Tax(10%): <span className="tax">15</span></p>
                <hr/>
                <p className="sum-total-price">Total Price: <span className="total-price">245</span></p>
                <button type="submit" className="sum-submit btn">Submit</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}