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

// function NewsGroupList({data, onClick}) {
//   const newsItems = data.map((item) => {
//     return(
//       <li className="news-item" key={item.id} onClick={onClick}>
//         <a href="" className="news-item-title">{item.title}</a>
//         <p className="news-item-date">Event date: <span className="news-date">{item.event_date}</span></p>
//       </li>
//     )
//   })
//   return(
//     <ul className="news-list">
//       {newsItems}
//     </ul>
//   )
// }

// export function NewsPopup({data}){
//   const popupItems = data.map((data) => {
//     return(
//       <div className="popup-news">
//       <div className="popup-news-container">
//         <div className="popup-close cursor-pointer">&#x2716;</div>
//         <div className="popup-body">
//           <img src={data.url} alt="" className="popup-img"/>
//           <div className="popup-info-group">
//             <h5 className="popup-title second-title">{data.tilte}</h5>
//             <div className="popup-info">
//               <p className="popup-event-date">Event Date: <span>{data.event_date}</span></p>
//               <p className="popup-publish-date">Publish Date: <span>{data.publish_date}</span></p>
//               <p className="popup-location">Location: <span>{data.location}</span></p>
//               <div className="description-group">
//                 <p className="description-title">Description</p>
//                 <p className="description">
//                   {data.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     )
//   })
//   return(
//     <>
//       {popupItems}
//     </>
//   )
// }

// export function NewsPopup({datas, onClick, onClickPrevent}){
//   const popupItems = datas.map((data) => {
//     return(
//       <div className="popup-news-container">
//         <div className="popup-close cursor-pointer" onClick={onClick}>&#x2716;</div>
//         <div className="popup-body">
//           <img src={data.url} alt="" className="popup-img"/>
//           <div className="popup-info-group">
//             <h5 className="popup-title second-title">{data.title}</h5>
//             <div className="popup-info">
//               <p className="popup-event-date">Event Date: <span>{data.event_date}</span></p>
//               <p className="popup-location">Location: <span>{data.location}</span></p>
//               <div className="description-group">
//                 <p className="description-title">Description</p>
//                 <p className="description">
//                   {data.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   })
//     return(
//     <div className="popup-news">
//       {popupItems}
//     </div>
//     )
// }

export default function News() {
  const [newsData, setNewData] = useState(dummyNewsData);

  // const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);

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

  const changeContent = (item, e) => {
    
    setPopupContent([item])
    // e.preventDefault()
    setPopupToggle(!popupToggle)
    // e.preventDefault()
    console.log('click')
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
    <>
    <section className="news">
      <div className="news-container">
        <div className="news-img"></div>
        <div className="news-body">
          <BtnGroup onChange={handleTypeChange}/>
          <div className="news-group">
            {/* <NewsGroupList data={news} onClick={() => changePopupData(news)}/> */}
            <ul className="news-list">
              {news.map((item) => {
                return(
                  <li className="news-item" key={item.id}>
                    <button className="news-item-title" onClick={() => changeContent(item)}>{item.title}</button>
                    <p className="news-item-date">Event date: <span className="news-date">{item.event_date}</span></p>
                  </li>
                )
              })}
            </ul>
            <div className="pagination">
              <Pagination data={numbers} onActive={handleActionPage} prevClick={handlePrevClickPage} nextClick={handleNextClickPage} currentPage={currentPage}/>
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && <NewsPopup datas={popupData} onClick={changePopupData}/>} */}
      {/* {
        isOpen && <NewsPopup data={popupData}/>
      } */}
      
    </section>

    {popupToggle && <div className="popup-news">
      <div className="popup-news-container" onClick={(e) => e.stopPropagation()}>
      {popupContent.map((pop) => {
        return(
          <>
            <div className="popup-header" key={pop.id}>
              <button className="popup-close cursor-pointer" onClick={changeContent}>&#x2716;</button>
            </div>
            <div className="popup-body">
              <img src={pop.url} alt="" className="popup-img"/>
              <div className="popup-info-group">
                <h5 className="popup-title second-title">{pop.title}</h5>
                <div className="popup-info">
                  <p className="popup-event-date">Event Date: <span>{pop.event_date}</span></p>
                  <p className="popup-location">Location: <span>{pop.location}</span></p>
                  <div className="description-group">
                    <p className="description-title">Description</p>
                    <p className="description">
                      {pop.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
      </div>
    </div>}



    </>
  )
}