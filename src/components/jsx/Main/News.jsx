import {useState} from 'react'
import { dummyNewsData } from '../Data/NewsData';
import { Pagination } from './Menu/Product';

const newsOptionData = [
  {
    id: "all",
    name: "All Events",
  },
  {
    id: "storewide",
    name: "Storewide Events",
  },
  {
    id: "branch",
    name: "Branch Events",
  },
  {
    id: "membership",
    name: "Membership",
  },
  {
    id: "collaboration",
    name: "Collaborations",
  },
  {
    id: "other",
    name: "Others",
  },
]

function BtnGroup({onChange}){
 const newsOptionItems = newsOptionData.map((item) => {
    return(
      <>
      <input type="radio" className="news-input" name="news" id={item.id} value={item.id} defaultChecked={item.id === "all"} onChange={onChange}/>
      <label htmlFor={item.id} className="news-label cursor-pointer">{item.name}</label>
      </>
    )
  })
  return(
    <div className="news-option">
      {newsOptionItems}
    </div>
  )
}

function NewsGroupList({data}) {
  const newsItems = data.map((item) => {
    return(
      <li className="news-item" key={item.id}>
        <a href="" className="news-item-title">{item.title}</a>
        <p className="news-item-date">Event date: <span className="news-date">{item.event_date}</span></p>
      </li>
    )
  })
  return(
    <ul className="news-list">
      {newsItems}
    </ul>
  )
}

export function NewsPopup(){
  return(
    <div className="popup-news">
      <div className="popup-news-container">
        <div className="popup-close cursor-pointer">&#x2716;</div>
        <div className="popup-body">
          <img src="https://picsum.photos/300/300?text=500" alt="" className="popup-img" />
          <div className="popup-info-group">
            <h5 className="popup-title second-title">Title</h5>
            <div className="popup-info">
              <p className="popup-event-date">Event Date: <span></span></p>
              <p className="popup-publish-date">Publish Date: <span></span></p>
              <p className="popup-location">Location: <span></span></p>
              <div className="description-group">
                <p className="description-title">Description</p>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function News() {
  const [newsData, setNewData] = useState(dummyNewsData);

  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 6
  const lastIndex = currentPage * newsPerPage
  const firstIndex = lastIndex - newsPerPage
  const news = newsData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(newsData.length / newsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  
  const handleTypeChange = (e) => {
    const SortByTime = dummyNewsData.sort((a, b) => a.publish_date - b.publish_date)
    if(e.target.value === "all"){
      return setNewData(SortByTime)
    } else{
      const newsType = SortByTime.filter(data => data.type.toLowerCase().includes(e.target.value))
      
      return setNewData(newsType)
    }
  }

  const handlePrevClickPage = () => {
    if(currentPage !== 1){
      return setCurrentPage(currentPage - 1)
    }
  }
  const handleNextClickPage = () => {
    if(currentPage !== npage){
      return setCurrentPage(currentPage + 1)
    }
  }
  const handleActionPage = (id) => {
    setCurrentPage(id)
  }

  return(
    <section className="news">
      <div className="news-container">
        <div className="news-img"></div>
        <div className="news-body">
          <BtnGroup onChange={handleTypeChange}/>
          <div className="news-group">
            <NewsGroupList data={news}/>
            <div className="pagination">
              <Pagination data={numbers} onActive={handleActionPage} prevClick={handlePrevClickPage} nextClick={handleNextClickPage} currentPage={currentPage}/>
            </div>
          </div>
        </div>
      </div>
      {/* <NewsPopup/> */}
    </section>
  )
}