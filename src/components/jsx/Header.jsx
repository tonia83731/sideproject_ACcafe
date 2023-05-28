import {ReactComponent as Hamburger} from '../assets/icon/nav_icon/hamburger.svg'
import {ReactComponent as Delete} from '../assets/icon/nav_icon/delete.svg'
import {ReactComponent as User} from '../assets/icon/nav_icon/user.svg'
import {ReactComponent as Wish} from '../assets/icon/nav_icon/like_save.svg'
import {ReactComponent as Bag} from '../assets/icon/nav_icon/bag.svg'

import {ReactComponent as Food} from '../assets/icon/menu/food.svg'
import {ReactComponent as ColdDrink} from '../assets/icon/menu/cold_drink.svg'
import {ReactComponent as HotDrink} from '../assets/icon/menu/hot_drink.svg'
import {ReactComponent as Soup} from '../assets/icon/menu/soup.svg'

const navData = [
  {
    id: 1,
    title: "Home",
    link:"/",
  },
  {
    id: 2,
    title: "Menu",
    link:"/menu",
  },
  {
    id: 3,
    title: "News",
    link:"/news",
  },
]

const dummyWishData = [
  {
    id: 1,
    name: "Chocolate Fondant",
    imgUrl:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
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
    id: 11,
    name: "Raseberry and Blueberry Smoothie",
    imgUrl:
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    price: 200,
    class: <ColdDrink/>
  },
]

const dummyBagData = [
  {
    id: 32,
    name: "Classic Tomato Spagetti",
    imgUrl:
      "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhZ2V0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 300,
    class: <Food/>
  },
  {
    id: 36,
    name: "Creamy Corn Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1616501268209-edfff098fdd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <Soup/>
  },
  {
    id: 16,
    name: "Caramel Macchiato",
    imgUrl:
      "https://images.unsplash.com/photo-1546549095-5d8bc3c37ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcmFtZWwlMjBkcmlua3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 180,
    class: <HotDrink/>
  },
]

export const UnorderList = ({data, className}) => {
  const dataItem = data.map((item) => {
    return(
      <li className={`${className}-item`} key={item.id}>
        <a href={item.link} className={`${className}-link`}>{item.title}</a>
      </li>
    )
  })
  return(
    <ul className={`${className}-list`}>
      {dataItem}
    </ul>
  )
}

function WishDropDown() {
  const wishItem = dummyWishData.map((item) => {
    return(
      <li className="dropdown-item">
        <img src={item.imgUrl} alt={item.name} className="dropdown-img"/>
        <div className="dropdown-body">
          <p className="dropdown-title">{item.class} {item.name}</p>
          <p className="dropdown-price">{item.price}</p>
        </div>
        <button type="button" className="dropdown-btn"><Delete/></button>
      </li>
    )
  })
  return(
    <div className="wish-dropdown">
      <a href="" className="wish nav-icon"><Wish/></a>
      <ul className="wish-list dropdown-list">
        <li className="dropdown-header">Wish List</li>
          {wishItem}
        <li className="dropdown-footer">
          <button type="button" className="dropdown-btn cursor-pointer btn">Clear all</button>
        </li>
      </ul>
    </div>
  )
}

function BagDropDown() {
  const bagItem = dummyBagData.map((item) => {
    return(
      <li className="dropdown-item">
        <img src={item.imgUrl} alt={item.name} class="dropdown-img"/>
        <div className="dropdown-body">
          <p className="dropdown-title">{item.class} {item.name}</p>
          <div className="dropdown-info">
            <span className="dropdown-price">$ 250</span>
            <span className="dropdown-quantity">Quantity: <span className="dropdown-quantity-num">1</span></span>
         </div>
        </div>
      </li>
    )
  })
  return(
    <div className="bag-dropdown">
      <a href="" className="bag nav-icon"><Bag/></a>
      <ul className="bag-list dropdown-list">
        <li className="dropdown-header">Bag List</li>
          {bagItem}
        <li className="dropdown-footer">
          <button type="button" className="dropdown-btn cursor-pointer btn">To shopping bag</button>
        </li>
      </ul>
    </div>
  )
}


export default function Header(){
  return(
    <header className="site-header">
      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <Hamburger/>
      </label>

      <h4 class="brand-title">AC Cafe'</h4>

      <nav>
        <UnorderList className="nav" data={navData}/>
      </nav>

      <div className="nav-icon-list">
        <a href="/login" className="nav-icon member">
        <User/>
        </a>
        {/* <a href="" className="nav-icon wish">
          <Wish/>
        </a> */}
        <WishDropDown/>
        <BagDropDown/>
        {/* <a href="" className="nav-icon bag">
          <Bag/>
        </a> */}
      </div>

    </header>
  )
}