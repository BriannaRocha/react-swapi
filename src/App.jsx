// npm modules
import { useState, useEffect } from "react"
import { Route, Link, Routes } from "react-router-dom"

//css
import './App.css'

// components
import Starship from "./components/Starship/Starship"

// services
import { getAllStarships } from "./services/sw-api"

function App() {
  const [allStarships, getStarshipsResult] = useState([])

  useEffect(() => {
    const starships = async () => {
      const starships = await getAllStarships()
      getStarshipsResult(starships.results)
    }
    starships()
  }, [])

  if(!allStarships.length) return <h1>Loading Starships...</h1>

  return (
    <>
      <div className='App'>
        <header className='App-Header'>
          STAR WARS STARSHIPS
        </header>
        <Routes>
          <Route path="/" element={
          <section>
          {allStarships.map((starship, idx) =>
            <Link 
              to={`/starships/${idx}`}
              key={idx}
            >
              {starship.name}
            </Link>
          )}
          </section>} />         
          <Route path="/starships/:idx" element={<Starship />} />
        </Routes>
      </div>
    </>
  )
}

export default App
