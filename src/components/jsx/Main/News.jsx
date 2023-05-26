
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

const dummyNewsData = [
  {
    id: 1,
    title: "Let's Celebrate AC's 3rd Anniversary",
    type: "all",
    publish_date: "2023 February 9",
    date: "2023 July 2",
    location: "All branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
  {
    id: 2,
    title: "Become Our Gloden Member",
    type: "membership",
    publish_date: "2023 February 9",
    date: "2023 July 4",
    location: "All branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
  {
    id: 3,
    title: "New Branch Launched: Hong Kong is our first step being worldwid",
    type: "branch",
    publish_date: "2023 February 18",
    date: "2023 August 4",
    location: "Branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
  {
    id: 4,
    title: "Disney have Partnered with AC Cafe' to Launch a New Signature Meal Order!",
    type: "collaboration",
    publish_date: "2023 February 9",
    date: "2023 September 11",
    location: "All branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
  {
    id: 5,
    title: "Happy Summer Holiday! Buy One Get One Free.",
    type: "all",
    publish_date: "2023 February 9",
    date: "2023 September 12",
    location: "All branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
  {
    id: 6,
    title: "New Product Released! Get 30%off for the Tasty Berry Party Set",
    type: "all",
    publish_date: "2023 February 9",
    date: "2023 September 27",
    location: "All branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
  {
    id: 7,
    title: "Taipei 101 Branch renovatted until October",
    type: "Branch",
    publish_date: "2023 February 9",
    date: "2023 October 9",
    location: "Branch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim in lectus eleifend maximus."
  },
]

function BtnGroup(){
 const newsOptionItems = newsOptionData.map((item, index) => {
    return(
      <>
      <input type="radio" className="news-input" name="news" id={item.id} value={item.id} defaultChecked={item.id === "all"}/>
      <label htmlFor={item.id} className="news-label">{item.name}</label>
      </>
    )
  })
  return(
    <div className="news-option">
      {newsOptionItems}
    </div>
  )
}

function NewsGroupList() {
  const newsItems = dummyNewsData.map((item) => {
    return(
      <li className="news-item" key={item.id}>
        <a href="" className="news-item-title">{item.title}</a>
        <p className="news-item-date">Published date: <span className="news-date">{item.publish_date}</span></p>
      </li>
    )
  })
  return(
    <ul className="news-list">
      {newsItems}
    </ul>
  )
}


export default function News() {
  return(
    <section className="news">
      <div className="news-container">
        <div className="news-img"></div>
        <div className="news-body">
          <BtnGroup/>
          <div className="news-group">
            <NewsGroupList/>
          </div>
        </div>
      </div>
    </section>
  )
}