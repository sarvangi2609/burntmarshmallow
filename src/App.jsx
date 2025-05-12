import './App.css'
import AllRoutes from './Components/AllRoutes'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main className="main-content">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
