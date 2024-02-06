const baseUrl = 'https://swapi.dev/api/starships'

export async function getAllStarships () {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/api/starships/${starshipId}`)
  return res.json()
}