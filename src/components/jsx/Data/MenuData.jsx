import {ReactComponent as Beer} from '../../assets/icon/menu/beer.svg'
import {ReactComponent as Cocktail} from '../../assets/icon/menu/cocktail.svg'
import {ReactComponent as ColdDrink} from '../../assets/icon/menu/cold_drink.svg'
import {ReactComponent as Food} from '../../assets/icon/menu/food.svg'
import {ReactComponent as HotDrink} from '../../assets/icon/menu/hot_drink.svg'
import {ReactComponent as Soup} from '../../assets/icon/menu/soup.svg'
import {QuantityCount} from '../Main/Menu/Cart'
import {ReactComponent as Like} from '../../assets/icon/nav_icon/like_save.svg'

import {useState} from 'react'

export const ProductData = [
  {
    id: 1,
    name: "Chocolate Fondant",
    imgUrl:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
    class: <Food/>
  },
  {
    id: 2,
    name: "Tiramisu",
    imgUrl:
      "https://images.unsplash.com/photo-1517400415121-f913b6f87532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 100,
    class: <Food/>
  },
  {
    id: 3,
    name: "Strawberry Sundae",
    imgUrl:
      "https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Food/>
  },
  {
    id: 4,
    name: "Cupcake",
    imgUrl:
      "https://images.unsplash.com/photo-1615832494873-b0c52d519696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 80,
    class: <Food/>
  },
  {
    id: 5,
    name: "Yogurt with Bake Granola and Fruits",
    imgUrl:
      "https://images.unsplash.com/photo-1600648832373-6f5e75b71ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 150,
    class: <Food/>
  },
  {
    id: 6,
    name: "Protein Smoothie Bowl",
    imgUrl:
      "https://images.unsplash.com/photo-1622484211785-e2c139030cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 280,
    class: <Food/>
  },
  {
    id: 7,
    name: "Apple Pie",
    imgUrl:
      "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Food/>
  },
  {
    id: 8,
    name: "Croissant",
    imgUrl:
      "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 80,
    class: <Food/>
  },
  {
    id: 9,
    name: "Diced French Toast Topped with Berries",
    imgUrl:
      "https://images.unsplash.com/photo-1654921304243-0177a403860d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
    class: <Food/>
  },
  {
    id: 10,
    name: "Chocolate Milkshake",
    imgUrl:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
    price: 200,
    class: <ColdDrink/>
  },
  {
    id: 11,
    name: "Raseberry and Blueberry Smoothie",
    imgUrl:
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    price: 200,
    class: <ColdDrink/>
  },
  {
    id: 12,
    name: "Apple and Cucumber Smoothie",
    imgUrl:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <ColdDrink/>
  },
  {
    id: 13,
    name: "Milk Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 100,
    class: <ColdDrink/>
  },
  {
    id: 14,
    name: "Caffè Americano",
    imgUrl:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 90,
    class: <HotDrink/>
  },
  {
    id: 15,
    name: "Latte",
    imgUrl:
      "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 120,
    class: <HotDrink/>
  },
  {
    id: 16,
    name: "Caramel Macchiato",
    imgUrl:
      "https://images.unsplash.com/photo-1546549095-5d8bc3c37ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcmFtZWwlMjBkcmlua3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 180,
    class: <HotDrink/>
  },
  {
    id: 17,
    name: "Matcha Latte",
    imgUrl:
      "https://images.unsplash.com/photo-1618308113210-3a8a1778f910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    price: 150,
    class: <HotDrink/>
  },
  {
    id: 18,
    name: "Black Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 90,
    class: <HotDrink/>
  },
  {
    id: 19,
    name: "Green Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1622480916113-9000ac49b79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    price: 90,
    class: <HotDrink/>
  },
  {
    id: 20,
    name: "Herbal Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1504382103100-db7e92322d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <HotDrink/>
  },
  {
    id: 21,
    name: "Juice",
    imgUrl:
      "https://images.unsplash.com/photo-1630424836013-00e25bfe1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 130,
    class: <ColdDrink/>
  },
  {
    id: 22,
    name: "Lemonade",
    imgUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 60,
    class: <ColdDrink/>
  },
  {
    id: 23,
    name: "Berry Ice Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 150,
    class: <ColdDrink/>
  },
  {
    id: 24,
    name: "Irish coffee",
    imgUrl:
      "https://images.unsplash.com/photo-1605361293140-fd5edb9ae9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Cocktail/>
  },
  {
    id: 25,
    name: "Cocktail",
    imgUrl:
      "https://images.unsplash.com/photo-1606767341197-2de041e9ad9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
    class: <Cocktail/>
  },
  {
    id: 26,
    name: "Champagne",
    imgUrl:
      "https://images.unsplash.com/photo-1601921427660-2e0997a3b8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80",
    price: 350,
    class: <Cocktail/>
  },
  {
    id: 27,
    name: "Beer",
    imgUrl:
      "https://images.unsplash.com/photo-1630446070374-df1ec648ac65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    price: 110,
    class: <Beer/>
  },
  {
    id: 28,
    name: "Vegan Sandwitch",
    imgUrl:
      "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Food/>
  },
  {
    id: 29,
    name: "Quiche",
    imgUrl:
      "https://images.unsplash.com/photo-1591985666643-1ecc67616216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 120,
    class: <Food/>
  },
  {
    id: 30,
    name: "Salad",
    imgUrl:
      "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 220,
    class: <Food/>
  },
  {
    id: 31,
    name: "Pizza",
    imgUrl:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    price: 120,
    class: <Food/>
  },
  {
    id: 32,
    name: "Classic Tomato Spagetti",
    imgUrl:
      "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhZ2V0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 300,
    class: <Food/>
  },
  {
    id: 33,
    name: "Garlic Bacon Pasta",
    imgUrl:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 300,
    class: <Food/>
  },
  {
    id: 34,
    name: "Pumpkin Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 180,
    class: <Soup/>
  },
  {
    id: 35,
    name: "Tomato Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <Soup/>
  },
  {
    id: 36,
    name: "Creamy Corn Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1616501268209-edfff098fdd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <Soup/>
  },

];


// function ProductMenuGridItem(){
//   return(
//     <div class="product-card">
//       <img
//         src={item.imgUrl}
//         alt={item.name} class="product-img"/>
//       <div className="card-body">
//         <h5 className="product-title">{item.class} {item.name}</h5>
//         <p className="product-price">$ {item.price}</p>
//       </div>
//       <div className="card-quantity">
//         <QuantityCount/>
//       </div>
//       <div className="card-btn">
//         <button className="btn default-btn add-cart-btn">Add to Cart</button>
//         <button className="btn wish-btn"><Like/></button>
//       </div>
//     </div>
//   )
// }

function ProductMenuGrid({data, onClick, quantity}){
  const productGrid = data.map((item) => {
    return(
      <div class="product-card" key={item.id}>
        <img
          src={item.imgUrl}
          alt={item.name} class="product-img"/>
        <div className="card-body">
          <h5 className="product-title">{item.class} {item.name}</h5>
          <p className="product-price">$ {item.price}</p>
        </div>
        <div className="card-quantity">
          <QuantityCount onClick={onClick} quantity={quantity}/>
        </div>
        <div className="card-btn">
          <button className="btn default-btn add-cart-btn">Add to Cart</button>
          <button className="btn wish-btn"><Like/></button>
        </div>
      </div>
)
  })
  return(
    <>
      {productGrid}
    </>
  )
}

function ProductMenuList({data, onClick, quantity}){
  const productList = data.map((item) => {
    return(
      <div class="product-list" key={item.id}>
        <div className="product-item">
          <div className="product-basic-info">
            <h5 className="product-title">{item.class} {item.name}</h5>
            <p className="product-price">$ {item.price}</p>
          </div>
          <div className="product-btn-group">
            <div className="product-add-quantity">
              <div className="list-quantity">
                <QuantityCount onClick={onClick} quantity={quantity}/>
              </div>
              <button className="btn default-btn add-cart-btn">Add to Cart</button>
            </div>
            <button className="btn wish-btn"><Like/></button>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      {productList}
    </>
  )
}

function ProductMenuMode({phase, data, onClick, quantity}){
  if(phase === 'grid'){
    return <ProductMenuGrid data={data} onClick={onClick} quantity={quantity}/>
  } else {
    return <ProductMenuList data={data} onClick={onClick} quantity={quantity}/>
  }
}

export function ProductMenu({phase, data, onClick, quantity}){
  return(
    <div className="data-panel" id="data-panel" data-mode={phase}>
      <ProductMenuMode phase={phase} data={data} onClick={onClick} quantity={quantity}/>
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