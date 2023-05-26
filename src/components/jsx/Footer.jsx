
import {ReactComponent as Facebook} from '../assets/social_media/Facebook.svg'
import {ReactComponent as Instagram} from '../assets/social_media/Instagram.svg'
import {ReactComponent as Twitter} from '../assets/social_media/Twitter.svg'
import {ReactComponent as Youtube} from '../assets/social_media/Youtube.svg'
import {ReactComponent as Line} from '../assets/social_media/Line.svg'
import {ReactComponent as Copyright} from '../assets/icon/footer/copyright.svg'



function SocialMediaLink() {
  return(
    <div className="social-media-group">
      <a href="" className="social-media-link"><Facebook/></a>
      <a href="" className="social-media-link"><Instagram/></a>
      <a href="" className="social-media-link"><Twitter/></a>
      <a href="" className="social-media-link"><Youtube/></a>
      <a href="" className="social-media-link"><Line/></a>
    </div>
  )
}



export default function Footer() {
  return(
    <footer>
      <div className="footer-container">
        <div className="subscribe-group">
          <label htmlFor="email"></label>
          <input type="text" className="subscribe-input" placeholder="Enter your email to get newest information"/>
          <input type="submit" className="subscribe-submit" value="Subscribe"/>
        </div>
        <SocialMediaLink/>
        <p className="copyright">
          <Copyright/> 2023 AC cafe'. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
