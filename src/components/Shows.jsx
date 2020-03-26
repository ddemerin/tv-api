import React from 'react'

const Shows = (props) => {
  const { title, overview, poster } = props
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`} />
      <h1>{title}</h1>
      <p>{overview}</p>
    </li>
  )
}

export default Shows
