import React from 'react'

const ScooterCard = ({id, model, charge_percent}) => {

  return (
    <div className='.media'>
      <spam className='card_message'>{id}</spam>
      <p className='card_message'>{model}</p>
      <p className='card_message'>{charge_percent}</p>
      <button  className='rent_button' type='button'>rent me</button>
    </div>
  )
}

export default ScooterCard