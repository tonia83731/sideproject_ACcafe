
import {ReactComponent as Facebook} from '../assets/social_media/Facebook.svg'
import {ReactComponent as Instagram} from '../assets/social_media/Instagram.svg'
import {ReactComponent as Twitter} from '../assets/social_media/Twitter.svg'
import {ReactComponent as Youtube} from '../assets/social_media/Youtube.svg'
import {ReactComponent as Line} from '../assets/social_media/Line.svg'
import {ReactComponent as Copyright} from '../assets/icon/footer/copyright.svg'

import { ReactComponent as Success } from '../assets/icon/footer/success.svg'
import { ReactComponent as False } from '../assets/icon/footer/success.svg'

import {useState} from 'react'

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
  const [email, setEmail] = useState('')
  const [isTrueOpen, setIsTrueOpen] = useState(false)
  const [isFalseOpen, setIsFalseOpen] = useState(false)

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isValidEmail(email)){
      setIsTrueOpen(true)
    } else {
      setIsFalseOpen(true)
    }
  }


  return(
    <footer>
      <div className="footer-container">
        <form className="subscribe-group" onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input type="text" className="subscribe-input" placeholder="Enter your email to get newest information" value={email} onChange={handleChange}/>
          <input type="submit" className="subscribe-submit" value="Subscribe"/>
        </form>
        { 
          isTrueOpen && <div className="popup true">
            <div className="popup-container">
              <span className="success"><Success/></span>
              <span className="sentence">The newest info will sent to the email</span>
              <a herf="#" className="close cursor-pointer" onClick={() => setIsTrueOpen(false)} >&#10005;</a>
            </div>
          </div>
        }
        {
          isFalseOpen && <div className="popup false">
            <div className="popup-container true">
              <span className="failed"><False/></span>
              <span className="sentence">This email is invaild. Please try again.</span>
              <a herf="#" className="close cursor-pointer" onClick={() => setIsFalseOpen(false)} >&#10005;</a>
            </div>
          </div>
        }
        <SocialMediaLink/>
        <p className="copyright">
          <Copyright/> 2023 AC cafe'. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
