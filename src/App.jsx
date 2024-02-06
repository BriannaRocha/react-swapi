// npm modules
import { useState, useEffect } from "react"
import React, { Component } from 'react'

//css
import './App.css'

// components
// import SearchForm from "../../components/SearchForm/SearchForm"
// import SpellCard from "../../components/SpellCard/SpellCard"

// services
import { getAllStarships } from "../../services/sw-api"

function App() {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData)
    }
    fetchStarshipList()
  }, [])


  return (
    <>
      <div className='App'>
        <head className='App-Header'>
          STAR WARS STARSHIPS
        </head>
        <section>
          
        </section>
      </div>
    </>
  )
}

export default App
