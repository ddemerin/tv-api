import React from 'react'

const Crew = (props) => {
  const { name, job } = props
  return (
    <>
      <div className="crew-container">
        <li className="crew">
          <h3>{name},</h3>&nbsp;<h4>{job}</h4>
        </li>
      </div>
    </>
  )
}

export default Crew
