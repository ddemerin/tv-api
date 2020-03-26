import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Shows from '../components/Shows'

const HomePage = (props) => {
  const [shows, setShows] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=a2a82544ba0aad2945926880c754faab&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setShows(resp.data.results)
  }

  useEffect(() => {
    console.log('effectively like a componentDidMount')
    getAllShows()
  }, [])

  return (
    <>
      <ul>
        {shows.map((show) => {
          return (
            <Shows
              key={show.id}
              title={show.name}
              overview={show.overview}
              poster={show.poster_path}
            />
          )
        })}
      </ul>
    </>
  )
}
export default HomePage
