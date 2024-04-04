import React from 'react'
import Reservation from './Reservation';
import { useState} from "react";


const ScooterCard = ({scooter}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='.media'>
      <span className='card_message'>No：{scooter.id}</span>
      <span className='card_message'>Scooter Model:{scooter.model}</span>
      <span className='card_message'>Battery :{scooter.charge_percent}%</span>
      <button  className='rent_button' type='button'onClick={toggleModal}>rent me</button>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2> scooter id {scooter.id}</h2>
            <Reservation scooter={scooter}/>
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