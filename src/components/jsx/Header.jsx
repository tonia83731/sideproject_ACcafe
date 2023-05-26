import {ReactComponent as Hamburger} from '../assets/icon/nav_icon/hamburger.svg'
import {ReactComponent as Delete} from '../assets/icon/nav_icon/delete.svg'
import {ReactComponent as User} from '../assets/icon/nav_icon/user.svg'
import {ReactComponent as Wish} from '../assets/icon/nav_icon/like_save.svg'
import {ReactComponent as Bag} from '../assets/icon/nav_icon/bag.svg'

const navData = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Menu",
  },
  {
    id: 3,
    title: "News",
  },
]

const dummyWishData = [
  {
    id: 1,
    name: "Diced French Toast Topped with Berries",
    price: "250",
    url: "https://images.unsplash.com/photo-1654921304243-0177a403860d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 2,
    name: "Pumpkin Soup (with Bread)",
    price: "180",
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Salad",
    price: "220",
    url: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  },
]

const dummyBagData = [
  {
    id: 1,
    name: "Diced French Toast Topped with Berries",
    price: "250",
    url: "https://images.unsplash.com/photo-1654921304243-0177a403860d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    quantity: 2,
  },
  {
    id: 2,
    name: "Pumpkin Soup (with Bread)",
    price: "180",
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    quantity: 1,
  },
  {
    id: 3,
    name: "Salad",
    price: "220",
    url: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    quantity: 4,
  },
]

export const UnorderList = ({data, className}) => {
  const dataItem = data.map((item) => {
    return(
      <li className={`${className}-item`} key={item.id}>
        <a href="" className={`${className}-link`}>{item.title}</a>
      </li>
    )
  })
  return(
    <ul className={`${className}-list`}>
      {dataItem}
    </ul>
  )
}

const WishItem = () => {
  dummyWishData.map((item) => {
    return(
      <li className="dropdown-item">
        <img src={item.url} alt="" className="dropdown-img"></img>
        <div className="dropdown-content">
          <p className="dropdown-item-name">{item.name}</p>
          <p className="dropdown-item-price">$ {item.price}</p>
        </div>
        <button type="button" className="dropdown-button">
          <Delete/>
        </button>
      </li>
    )
  })
}

const BagItem = () => {
  dummyBagData.map((item) => {
    return(
      <li className="dropdown-item">
        <img src={item.url} alt="" class="dropdown-img"></img>
        <div className="dropdown-content">
          <p className="dropdown-item-name">{item.name}</p>
          <div className="dropdown-content-detail">
            <p className="dropdown-item-price">$ {item.price}</p>
            <p className="dropdown-item-quantity">Quantity: <span className="dropdown-item-quantity-num">{item.quantity}</span></p>
          </div>
        </div>
      </li>
    )
  })
}

const DropDown = ({children, className, name}) => {
  return(
    <div className={`dropdown ${className}-dropdown`}>
      <a href="" className={`nav-icon ${className}`}>
        {className === 'wish' ? <Wish/> : <Bag/>}
      </a>
      {/* <ul className="dropdown-list">
        <li className="dropdown-list-header">{name} List</li>
        {children}
        <li class="dropdown-list-footer">
          <a href="" className="dropdown-btn">
            {className === 'wish' ? "Delete All" : "To Shopping Bag"}
          </a>
        </li>
      </ul> */}
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
        <UnorderList data={navData} className="nav"/>
      </nav>

      <a href="" className="nav-icon member">
        <User/>
      </a>

      <DropDown className="wish" name="Wish">
        <WishItem/>
      </DropDown>
      <DropDown className="bag" name="Bag">
        <BagItem/>
      </DropDown>

    </header>
  )
}