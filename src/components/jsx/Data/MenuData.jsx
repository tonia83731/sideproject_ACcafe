import {ReactComponent as Beer} from '../../assets/icon/menu/beer.svg'
import {ReactComponent as Cocktail} from '../../assets/icon/menu/cocktail.svg'
import {ReactComponent as ColdDrink} from '../../assets/icon/menu/cold_drink.svg'
import {ReactComponent as Food} from '../../assets/icon/menu/food.svg'
import {ReactComponent as HotDrink} from '../../assets/icon/menu/hot_drink.svg'
import {ReactComponent as Soup} from '../../assets/icon/menu/soup.svg'
import {QuantityCount} from '../Main/Menu/Cart'
import {ReactComponent as Like} from '../../assets/icon/nav_icon/like_save.svg'

import { createContext } from 'react'



// function ProductMenuGrid({data}){
//   const productGrid = data.map((item) => {
//     return(
//       <div class="product-card" key={item.id}>
//         <img
//           src={item.imgUrl}
//           alt={item.name} class="product-img"/>
//         <div className="card-body">
//           <h5 className="product-title">{item.class} {item.name}</h5>
//           <p className="product-price">$ {item.price}</p>
//         </div>
//         <div className="card-quantity">
//           <button className="quantity-btn minus cursor-pointer" id="minus" onClick={() => item.onClickMinus(item.id)}>-</button>
//           <span className="quantity-count">{item.quantity}</span>
//           <button className="quantity-btn plus cursor-pointer" id="plus" onClick={() => item.onClickPlus(item.id)}>+</button>
//         </div>
//         <div className="card-btn">
//           <button className="btn default-btn add-cart-btn">Add to Cart</button>
//           <button className="btn wish-btn"><Like/></button>
//         </div>
//       </div>
// )
//   })
//   return(
//     <>
//       {productGrid}
//     </>
//   )
// }

// function ProductMenuList({data, onClickPlus, onClickMinus}){
//   const productList = data.map((item) => {
//     return(
//       <div class="product-list" key={item.id}>
//         <div className="product-item">
//           <div className="product-basic-info">
//             <h5 className="product-title">{item.class} {item.name}</h5>
//             <p className="product-price">$ {item.price}</p>
//           </div>
//           <div className="product-btn-group">
//             <div className="product-add-quantity">
//               <div className="list-quantity">
//                 <button className="quantity-btn minus cursor-pointer" id="minus" onClick={() => onClickMinus(item.id)}>-</button>
//                 <span className="quantity-count">{item.quantity}</span>
//                 <button className="quantity-btn plus cursor-pointer" id="plus" onClick={() => onClickPlus(item.id)}>+</button>
//               </div>
//               <button className="btn default-btn add-cart-btn">Add to Cart</button>
//             </div>
//             <button className="btn wish-btn"><Like/></button>
//           </div>
//         </div>
//       </div>
//     )
//   })
//   return (
//     <>
//       {productList}
//     </>
//   )
// }

const ProductMenuGrid = ({data, onClickMinus, onClickPlus}) => {
  return(
    <div class="product-card" key={data.id}>
      <img
        src={data.imgUrl}
        alt={data.name} class="product-img"/>
      <div className="card-body">
        <h5 className="product-title">{data.class} {data.name}</h5>
        <p className="product-price">$ {data.price}</p>
      </div>
      <div className="card-quantity">
        <button className="quantity-btn minus cursor-pointer" id="minus" onClick={() => onClickMinus(data.id)}>-</button>
        <span className="quantity-count">{data.quantity}</span>
        <button className="quantity-btn plus cursor-pointer" id="plus" onClick={() => onClickPlus(data.id)}>+</button>
      </div>
      <div className="card-btn">
        <button className="btn default-btn add-cart-btn">Add to Cart</button>
        <button className="btn wish-btn"><Like/></button>
      </div>
    </div>
  )
}


const ProductMenuList = ({data, onClickMinus, onClickPlus}) => {
  return(
    <div class="product-list" key={data.id}>
      <div className="product-item">
        <div className="product-basic-info">
          <h5 className="product-title">{data.class} {data.name}</h5>
          <p className="product-price">$ {data.price}</p>
        </div>
        <div className="product-btn-group">
          <div className="product-add-quantity">
            <div className="list-quantity">
              <button className="list-quantity-btn minus cursor-pointer" id="minus" onClick={() => onClickMinus(data.id)}>-</button>
              <span className="list-quantity-count">{data.quantity}</span>
              <button className="list-quantity-btn plus cursor-pointer" id="plus"  onClick={() => onClickPlus(data.id)}>+</button>
            </div>
            <button className="btn default-btn add-cart-btn">Add to Cart</button>
          </div>
          <button className="btn wish-btn"><Like/></button>
        </div>
      </div>
    </div>
  )
}



function ProductMenuMode({phase, data, onClickMinus, onClickPlus}){
  if(phase === 'grid'){
    return <ProductMenuGrid data={data} onClickMinus={onClickMinus} onClickPlus={onClickPlus}/>
  } else {
    return <ProductMenuList data={data} onClickMinus={onClickMinus} onClickPlus={onClickPlus}/>
  }
}

export function ProductMenu({phase, data,onClickMinus, onClickPlus}){
  return(
    <div className="data-panel" id="data-panel" data-mode={phase}>
      {
        data.map((data) => {
          return <ProductMenuMode phase={phase} data={data} onClickMinus={onClickMinus} onClickPlus={onClickPlus}/>
        })
      }
    </div>
  )
}

export function ProductSearch({onChange, onSubmit, value}){
  return(
    <form className="product-search" onSubmit={onSubmit}>
      <input type="text" className="search-input" placeholder="Type in keywords here..." onChange={onChange} value={value}/>
      <button type="submit" className="search-btn btn">Search</button>
    </form>
  )
}
