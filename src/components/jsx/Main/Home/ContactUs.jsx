import {ReactComponent as OpenTime} from '../../../assets/icon/home_icon/open_time.svg'
import {ReactComponent as Location} from '../../../assets/icon/home_icon/location.svg'
import {ReactComponent as Phone} from '../../../assets/icon/home_icon/phone.svg'

const dummyLocationData = [
  {
    id: 1,
    name: "Taipei 101",
    location: "110, Taipei City, Xinyi District, City Hall Rd, 45號101辦公大樓1樓",
    phone: "02 8101 8126",
    openTime: "Mon-Fri 7:30 AM - 7:30 PM"
  },
  {
    id: 2,
    name: "Xinhai",
    location: "106, Taipei City, Da’an District, Section 2, Xinhai Rd, No.75",
    phone: "04 2251 1366",
    openTime: "Mon-Sun 6:30 AM - 8:00 PM"
  },
  {
    id: 3,
    name: "Chaofu",
    location: "40757, Taichung City, Xitun District, Chaofu Rd, 83號1樓",
    phone: "04 2251 1366",
    openTime: "Mon-Sun 7:00 AM - 9:30 PM"
  },
  {
    id: 4,
    name: "Changrong",
    location: "701, Tainan City, East District, Changrong Rd Section 3, No. 139號",
    phone: "04 2251 1366",
    openTime: "Mon-Sun 7:00 AM - 10:00 PM"
  }
]


function ShopInfo(){
  const shopItems = dummyLocationData.map((shop) => {
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