import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Shows from '../components/Shows'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [featured, setFeatured] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=a2a82544ba0aad2945926880c754faab&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setShows(resp.data.results)
    const randomize = Math.floor(Math.random() * 20)
    setFeatured(resp.data.results[randomize])
  }

  useEffect(() => {
    console.log('effectively like a componentDidMount')
    getAllShows()
  }, [])

  return (
    <>
      <div className="featured-show-container">
        <div className="featured-show">
          <a className="show-links" href={`/tv/${featured.id}`}>
            <h2>Random Featured Show</h2>
            <div className="featured-img">
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${featured.poster_path}`}
              />
            </div>
            <h3>{featured.name}</h3>
            <p className="featured-overview">{featured.overview}</p>
          </a>
        </div>
      </div>
      <ul>
        {shows.map((show) => {
          return (
            <Shows
              id={show.id}
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
