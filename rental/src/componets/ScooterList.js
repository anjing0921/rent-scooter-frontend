import React from "react";
// import axios from "axios";
import { useEffect, useState} from "react";
import ScooterCard from "./ScooterCard"
import './ScooterList.css';
// import Switch from '@mui/material/Switch';

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
  // console.log(scooters)
  // const fetchScooters = async () => {
    
  // };
  // console.log(scooters)
  // useEffect(() => {
  //   fetchScooters();
  // }, []);
  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //     .then((response) => {
  //       setScooters(response.data);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(<section>{error.response.data.message}</section>);
  //     });
  // }, []);

  return (
    <div>
      <span className="pageTitle">rent a scooter</span>
      <div className="list">
        <p>list</p>
        <button  className='rent_button' type='button' onClick={handelAll}>{showAll ?"Available scooter":"All scooter"}</button>
      </div>
      {scooters.map((s)=> (
        <ScooterCard 
          key={s.id}
          id={s.id}
          model={s.model}
          charge_percent={s.charge_percent}
        />
      ))}
    </div>
  );
};

export default ScooterList;