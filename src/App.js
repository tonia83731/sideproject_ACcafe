import './components/styles/main.scss';
import logo from './logo.svg';
import Header from './components/jsx/Header';
import Footer from './components/jsx/Footer';
import Main from './components/jsx/Main/Main';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Main/>
      <Footer/>
    </>
    // <Header/>
  );
}

export default App;
