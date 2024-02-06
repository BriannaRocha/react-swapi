// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// services
import { getStarship } from "../../services/sw-api"



const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [starshipId])

  return (

  )

}

export default StarshipDetails