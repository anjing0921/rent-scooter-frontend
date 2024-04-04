import React from "react";
// import axios from "axios";
import { useState} from "react";
import ScooterCard from "./ScooterCard"
import './ScooterList.css';

const ScooterList = () => {
  const ScootersData = [{"charge_percent":25.6,"id":1,"model":"Thunderbolt DX"},
                        {"charge_percent":15.3,"id":2,"model":"Thunderbolt DX"},
                        {"charge_percent":16.0,"id":3,"model":"Thunderbolt DX+"},
                        {"charge_percent":14.0,"id":4,"model":"Thunderbolt DX+"},
                        {"charge_percent":58.4,"id":5,"model":"Thunderbolt DX+"},
                      
]
  const [scooters, setScooters] = useState(ScootersData);
  const [showAll, setShowAll] = useState(false);

  const scooter = ScootersData.filter((s) => s.charge_percent > 15);
  const handelAll = () =>{
    setShowAll(!showAll);
    if (showAll) {
      setScooters(ScootersData)
    } else {
      setScooters(scooter)
    }
  }

  return (
    <div>
      <span className="pageTitle">rent a scooter</span>
      <div className="list">
        <button  className='rent_button' type='button' onClick={handelAll}>{showAll ?"Available scooter":"All scooter"}</button>
        <p>list</p>
      </div>
      {scooters.map((s)=> (
        <ScooterCard 
          key={s.id}
          scooter = {s}
        />
      ))}
    </div>
  );
};

export default ScooterList;