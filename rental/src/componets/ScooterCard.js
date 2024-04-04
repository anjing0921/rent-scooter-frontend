import React from 'react'
import Reservation from './Reservation';
import { useState} from "react";


const ScooterCard = ({id, model, charge_percent}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='.media'>
      <span className='card_message'>{id}</span>
      <span className='card_message'>Scooter Model:{model}</span>
      <span className='card_message'>Battery {charge_percent}%</span>
      <button  className='rent_button' type='button'onClick={toggleModal}>rent me</button>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2> scooter id {id}</h2>
            <Reservation scooter_id={id}/>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ScooterCard