import {useState} from 'react'

export function QuantityCount({onClick, quantity}){
  return(
    <>
      <button className="quantity-btn minus cursor-pointer" id="minus" onClick={onClick}>-</button>
      <span className="quantity-count">{quantity}</span>
      {/* <input type="text" className="quantity-count" placeholder={quantity} disabled/> */}
      <button className="quantity-btn plus cursor-pointer" id="plus" onClick={onClick}>+</button>
    </>
  )
}

function ShoppingBagItem({className, onClick, quantity}){
  return(
    <li className={`${className}-item`} data-count="0" data-price="150">
      <div>
        <p className={`${className}-item-title`}>Yogurt with Bake Granola and Fruits</p>
        <div className={`${className}-item-body`}>
          <p className={`${className}-item-price`}>$ 150</p>
          <div className={`${className}-item-quantity`}>
            <QuantityCount onClickMinus={onClick}  quantity={quantity}/>
          </div>
          <p className={`${className}-item-total-price`}>$ 150</p>
        </div>
      </div>
      <a href="" className={`${className}-item-delete`}>&#10005;</a>
    </li>
  )
}

export default function Cart(){
  const [quantity, setQuantity] = useState(0)

  const handleQuantityClickMinus = () => {
    if(quantity !== 0){
      setQuantity(quantity-1)
    }
  }
  const handleQuantityClickPlus = () => {
    setQuantity(quantity+1)
  }
  return(
    <section className="cart" id="cart">
      <div className="cart-container">
        <h3 className="cart-title title">Shopping Bag</h3>
        <div className="cart-body">
          <section className="shopping-bag">
            <div className="shopping-bag-container">
              <ul className="shopping-bag-list">
                <ShoppingBagItem className="shopping-bag" quantity={quantity}/>
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