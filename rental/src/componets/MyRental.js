import React from 'react'

const MyRental = () => {
  return (
    <div className='.media'>
      <span className='card_message'>{id}</span>
      <span className='card_message'>Scooter Model:{model}</span>
      <span className='card_message'>Battery {charge_percent}%</span>
      <button  className='rent_button' type='button'onClick={toggleModal}>return</button>
      
    </div>
  )
}

export default MyRental