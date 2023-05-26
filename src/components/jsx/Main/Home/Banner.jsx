

export default function Banner() {
  return(
    <section className="banner">
      <div className="banner-container">
        <div className="main-banner">
          <h3 className="main-title">New Product Launched</h3>
          <p className="main-subtitle">Get 30% off to be the first one to try Berry Party Set.</p>
          <a href="" className="main-btn btn default-btn">Go to Menu</a>
          <div className="background-white"></div>
        </div>
        <div className="sub-banner left-top-banner">
          <h5 className="sub-title">Valentines Day Special Deal!</h5>
          <a href="" className="left-top-btn sub-btn btn default-btn">More</a>
          <div className="sub-background-white"></div>
        </div>
        <div className="sub-banner right-down-banner">
          <h5 className="sub-title second-title">Valentines Day Special Deal!</h5>
          <a href="" className="right-down-btn sub-btn btn default-btn">More</a>
          <div className="sub-background-white"></div>
        </div>
      </div>
    </section>
  )
}