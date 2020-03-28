import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cast from '../components/Cast'
import Crew from '../components/Crew'

const PickedShow = (props) => {
  const id = props.match.params.id

  const [crew, setCrew] = useState([])
  const [cast, setCast] = useState([])
  const [details, setDetails] = useState([])

  const getCastCrew = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=a2a82544ba0aad2945926880c754faab&language=en-US&page=1`
    )
    console.log(resp.data.cast)
    setCast(resp.data.cast)
    console.log(resp.data.crew)
    setCrew(resp.data.crew)
  }

  const getDetails = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=a2a82544ba0aad2945926880c754faab&language=en-US&page=1`
    )
    console.log(resp.data)
    setDetails(resp.data)
  }

  useEffect(() => {
    getCastCrew()
    getDetails()
  }, [])

  return (
    <>
      <div className="picked-show-container">
        <div className="picked-show">
          <h1>{details.name}</h1>
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${details.backdrop_path}`}
            />
          </div>
        </div>
        <p className="show-details">{details.overview}</p>
      </div>
      <div className="cast-crew-credits-container">
        <h1>CAST</h1>
        <ul className="cast-crew-credits">
          {cast.map((cast) => {
            return (
              <Cast
                character={cast.character}
                name={cast.name}
                picture={cast.profile_path}
              />
            )
          })}
        </ul>
        <h1>CREW</h1>
        {crew.map((crew) => {
          return <Crew name={crew.name} job={crew.job} />
        })}
      </div>
    </>
  )
}

export default PickedShow
