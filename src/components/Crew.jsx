import React from 'react'

const Crew = (props) => {
  const { name, job } = props
  return (
    <>
      <div className="crew-container">
        <li className="crew">
          <h2>{name},</h2> <h3>{job}</h3>
        </li>
      </div>
    </>
  )
}

export default Crew
