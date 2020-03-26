import React from 'react'

const Shows = (props) => {
  const { title, overview, poster } = props
  return (
    <li className="top-shows">
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`} />
      </div>
      <h3>{title}</h3>
      <p>{overview}</p>
    </li>
  )
}

export default Shows
