import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Aside from './components/Aside'
import Section from './components/Section'
import Article from './components/Article'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container'>
      <Header/>
      <Nav/>
      <div className="inner">
      <Aside/>
      <Section/>
      </div>
      <Article/>
      <Footer/>
    </div>
  )
}

export default App
