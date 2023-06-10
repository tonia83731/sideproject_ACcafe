import {ReactComponent as Grid} from '../../../assets/icon/menu/grid.svg'
import {ReactComponent as List} from '../../../assets/icon/menu/Vector.svg'
import { UnorderList } from '../../Header'
import {useState, useContext} from 'react'
import { ProductMenu, ProductSearch } from '../../Data/MenuData'

import {dummyProductData} from '../../Data/ProductData'



export default function Product() {
  const[mode, setMode] = useState('grid')
  const[searchValue, setSearchValue] = useState('')
  const[showData, setShowData] = useState(dummyProductData)
  // const[itemQuantity, setItemQuantity] = useState(ProductData)
  const[quantityCounts, setQuantityCounts] = useState(dummyProductData)

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 4
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const record = showData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(showData.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const handleModeSwitch = (e) => {
    if(e.target.matches('#grid')){
      setMode('grid')
    } else if (e.target.matches('#list')){
      setMode('list')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const filterData = showData.filter(item => item.name.toLowerCase().includes(searchValue))
    console.log(filterData)
    // if(filterData.length === 0) return
    if(filterData.length === 0) return setShowData(dummyProductData)
    setSearchValue('') 
    return setShowData(filterData)
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

  const handlePlusQuantity = (id) => {
    setQuantityCounts(
      quantityCounts.map(quantityCount => {
        if(quantityCount.id === id){
          return{
            ...quantityCount,
            quantity: quantityCount + 1
          }
        }
        return quantityCounts
      })
    )
  }
  const handleMinusQuantity = (id) => {
    setQuantityCounts(
      quantityCounts.map(quantityCount => {
        if(quantityCount.id === id && quantityCount.quantity > 0){
          return{
            ...quantityCount,
            quantity: quantityCount - 1
          }
        }
        return quantityCounts
      })
    )
  }

  return(
    <section className="product">
      <div className="product-container">
        <h3 className="product-title title">Product Menu</h3>
        <div className="product-body">
          <div className="product-control">
            <div className="mode">
              <input type="radio" className="grid" id="grid" name="mode"  value="grid" defaultChecked onClick={handleModeSwitch}/>
              <label htmlFor="grid" className="grid mode-btn" data-mode="grid">
                <Grid/>
              </label>
              <input type="radio" className="list" id="list" name="mode" value="list" onClick={handleModeSwitch}/>
              <label htmlFor="list" className="list mode-btn"data-mode="list">
                <List/>
              </label>
            </div>
            <ProductSearch value={searchValue} onSubmit={handleSubmit} onChange={(e) => setSearchValue(e.target.value)}/>
          </div>
          <section className="product-menu">
            <ProductMenu phase={mode} data={record} onClickPlus={handlePlusQuantity} onClickMinus={handleMinusQuantity}/>
            {/* <ProductMenuList/> */}
          </section>
          <div className="pagination">
            <Pagination data={numbers} onActive={handleActionPage} prevClick={handlePrevClickPage} nextClick={handleNextClickPage} currentPage={currentPage}/>
          </div>
        </div>
      </div>
    </section>
  )
} 

export function Pagination({data, onActive, prevClick, nextClick, currentPage}){
  const page = data.map((page) => {
    return(<li className={`page-item ${currentPage === page ? "selected" : ""}`} key={page} data-page={page}><a href="#" className="page-link" onClick={() => onActive(page)}>{page}</a></li>)
  })
  return(
    <ul className="page-list">
      <li className="page-item"><a href="#" className="page-link prev" onClick={prevClick}>❮</a></li>
      {page}
      <li className="page-item"><a href="#" className="page-link next" onClick={nextClick}>❯</a></li>
    </ul>
  )
}