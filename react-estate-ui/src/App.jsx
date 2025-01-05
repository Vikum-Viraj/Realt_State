import Navbar from './component/Navbar'
import './layout.scss'
import HomePage from './routes/homePage/HomePage'

function App() {
  return (
    <div className="layout">
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='content'>
        <HomePage/>
      </div>
      <HomePage/>
    </div>
  )
}

export default App