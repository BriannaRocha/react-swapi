// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// // services
import { getStarship } from "../../services/sw-api"

// css
import "./Starship.css"

const Starship = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { idx } = useParams()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarship(idx)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [idx])

  return (
    <>
      <div className="Starship">
        <div className="Starship-starship">
          <span>Starship Name:</span>
          <span>{starshipDetails.name}</span>
          <span>Starship Model:</span>
          <span>{starshipDetails.model}</span>
        </div>
      </div>
    </>
  )

}

export default Starship