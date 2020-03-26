import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Featured = () => {
  const [featured, setFeatured] = useState([])

  const getFeatured = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=a2a82544ba0aad2945926880c754faab&language=en-US&page=1'
    )
    setFeatured(resp.data.results[Math.round(Math.random() * 20)])
  }

  useEffect(() => {
    getFeatured()
  }, [])

  const name = featured.name
  const overview = featured.overview
  const poster = featured.poster_path

  return (
    <div className="featured-show-container">
      <div className="featured-show">
        <h2>Featured Show</h2>
        <div className="featured-img">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`}
          />
        </div>
        <h3>{name}</h3>
        <p className="featured-overview">{overview}</p>
      </div>
    </div>
  )
}

export default Featured
