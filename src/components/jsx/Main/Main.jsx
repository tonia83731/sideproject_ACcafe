import Home from './Home/Home'
import News from './News'
import Login from './Login'
import Menu from './Menu/Menu'


export default function Main(){
  return(
    <main>
      <div className="main-container">
        {/* <Home/> */}
        <Menu/>
        {/* <News/> */}
        {/* <Login/> */}
      </div>
    </main>
  )
}