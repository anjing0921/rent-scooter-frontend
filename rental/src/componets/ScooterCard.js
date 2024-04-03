import React from 'react'

const ScooterCard = (id) => {

  return (
    <div className='.media'>
      <p className='card_message'>{id}</p>
      <button  className='rent_button' type='button'>rent me</button>
    </div>
  )
}

export default ScooterCard