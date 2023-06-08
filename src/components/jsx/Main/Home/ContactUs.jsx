import {ReactComponent as OpenTime} from '../../../assets/icon/home_icon/open_time.svg'
import {ReactComponent as Location} from '../../../assets/icon/home_icon/location.svg'
import {ReactComponent as Phone} from '../../../assets/icon/home_icon/phone.svg'

import { dummyShopData } from '../../Data/ShopData'


function ShopInfo(){
  const shopItems = dummyShopData.map((shop) => {
    return(
      <div className="shop-info-group" key={shop.id}>
        <h5 class="shop-title second-title">{shop.name}</h5>
        <ul className="shop-list">
          <li className="shop-item"><Location/> {shop.location}</li>
          <li className="shop-item"><Phone/> {shop.phone}</li>
          <li className="shop-item"><OpenTime/> {shop.openTime}</li>
        </ul>
      </div>
    )
  })
  return(
    <>
      {shopItems}
    </>
  )
}

export default function ContactUs() {
  return(
    <section className="contact-us">
      <div className="contact-us-container">
        <div className="contact-us-img"></div>
        <div className="contact-us-group">
          <h3 className="contact-us-title title">Contact Us</h3>
          <ShopInfo/>
        </div>
      </div>
    </section>
  )
}