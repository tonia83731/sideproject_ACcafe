import Banner from "./Banner"
import ContactUs from "./ContactUs"

export default function Home() {
  return(
    <section className="home">
      <div className="home-container">
        <Banner/>
        <ContactUs/>
      </div>
    </section>
  )
}