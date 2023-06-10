import Home from './Home/Home'
import News from './News'
import Login from './Login'
import Menu from './Menu/Menu'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Main(){
  return(
    <main>
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="news" element={<News/>}/>
            <Route path="login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  )
}