import React, { useState } from 'react'
const MyRental = ( { rental}) => {

  const [myRental, setMyRental] = useState(
    rental
)
  const returnRental = () =>{
    setMyRental(
      myRental.id,
      myRental.customer_id,
      myRental.scooter_id,
      myRental.is_returned = "true"
    )
  }
  // console.log(myRental)
  return (
    <div className='.media'>
      <span className='card_message'>Customer:{rental.customer_id}</span>
      <span className='card_message'>Scooter :{rental.scooter_id}</span>
      <span className='card_message'>Return : {rental.is_returned}</span>
      <button  className='rent_button' type='button'onClick={returnRental}>return</button>
    </div>
  )
}

export default MyRental