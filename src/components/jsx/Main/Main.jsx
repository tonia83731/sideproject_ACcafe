import Home from './Home/Home'
import News from './News'
import Login from './Login'



export default function Main(){
  return(
    <main>
      <div className="main-container">
        {/* <Home/> */}
        {/* <News/> */}
        <Login/>
      </div>
    </main>
  )
}