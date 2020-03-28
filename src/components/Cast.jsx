import React from 'react'

const Cast = (props) => {
  const { character, name, picture } = props
  return (
    <>
      <div className="cast-container">
        <li className="cast">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${picture}`}
            />
          </div>
          <h3>{name}</h3>
          <p>as</p>
          <h3>{character}</h3>
        </li>
      </div>
    </>
  )
}

export default Cast
