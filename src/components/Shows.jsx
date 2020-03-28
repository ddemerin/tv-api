import React from 'react'

const Shows = (props) => {
  const { title, poster, id } = props
  return (
    <>
      <a className="show-links" href={`/tv/${id}`}>
        <li className="one-top-show">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster}`}
            />
          </div>
          <h3>{title}</h3>
        </li>
      </a>
    </>
  )
}

export default Shows
