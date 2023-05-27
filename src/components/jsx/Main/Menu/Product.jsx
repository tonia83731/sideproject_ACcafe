import {ReactComponent as Grid} from '../../../assets/icon/menu/grid.svg'
import {ReactComponent as List} from '../../../assets/icon/menu/Vector.svg'
import { UnorderList } from '../../Header'
import {useContext} from 'react'
import { ProductMenuGrid, ProductMenuList } from '../../Data/MenuData'






const pages = [1,2,3,4,5]

export function Pagination(){
  return(
    <ul className="page-list">
      <li className="page-item"><a href="" className="page-link prev">❮</a></li>
      {pages.map((page) => {
        return(<li className={`page-item ${page === 1? "selected" : ""}`} key={page}><a href="" className="page-link">{page}</a></li>)
      })}
      <li className="page-item"><a href="" className="page-link next">❯</a></li>
    </ul>
  )
}


export default function Product() {
  return(
    <section className="product">
      <div className="product-container">
        <h3 className="product-title title">Product Menu</h3>
        <div className="product-body">
          <div className="product-control">
            <div className="mode">
              <input type="radio" className="grid" id="grid" name="mode"  value="grid" defaultChecked/>
              <label htmlFor="grid" className="grid mode-btn"data-mode="grid">
                <Grid/>
              </label>
              <input type="radio" className="list" id="list" name="mode" value="list"/>
              <label htmlFor="list" className="list mode-btn"data-mode="list">
                <List/>
              </label>
            </div>
            <div className="product-search">
              <input type="text" className="search-input" placeholder="Type in keywords here..."/>
              <button type="submit" className="search-btn btn">Search</button>
            </div>
          </div>
          <section className="product-menu">
            {/* <ProductMenuGrid/> */}
            <ProductMenuList/>
          </section>
          <div className="pagination">
            <Pagination/>
          </div>
        </div>
      </div>
    </section>
  )
} 