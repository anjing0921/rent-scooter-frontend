import React from "react";
// import axios from "axios";
import { useEffect, useState} from "react";
import ScooterCard from "./ScooterCard"
import './ScooterList.css';
import Switch from '@mui/material/Switch';

const ScooterList = () => {
  const ScootersData = [{"charge_percent":25.6,"id":1,"model":"Thunderbolt DX"},
                        {"charge_percent":15.3,"id":2,"model":"Thunderbolt DX"},
                        {"charge_percent":16.0,"id":3,"model":"Thunderbolt DX+"},
                        {"charge_percent":14.0,"id":4,"model":"Thunderbolt DX+"},
                        {"charge_percent":58.4,"id":5,"model":"Thunderbolt DX+"},
                        {"charge_percent":52.0,"id":6,"model":"Speedster IV"},
                        {"charge_percent":27.3,"id":7,"model":"Speedster IV"},
                        {"charge_percent":76.0,"id":8,"model":"Speedster V"},
                        {"charge_percent":42.2,"id":9,"model":"Speedster VI"},
                        {"charge_percent":61.0,"id":10,"model":"Speedster VII"},
                        // {"charge_percent":92.5,"id":11,"model":"Nimbus Sparkle"},
                        // {"charge_percent":88.0,"id":12,"model":"Nimbus Sparkle"},
                        // {"charge_percent":74.2,"id":13,"model":"Nimbus Sparkle+"},
                        // {"charge_percent":70.0,"id":14,"model":"Nimbus Rocket"},
                        // {"charge_percent":53.7,"id":15,"model":"Nimbus Rocket"},
                        // {"charge_percent":7.5,"id":16,"model":"Starlight V70"},
                        // {"charge_percent":82.5,"id":17,"model":"Starlight V70"},
                        // {"charge_percent":50.8,"id":18,"model":"Starlight V75"},
                        // {"charge_percent":28.0,"id":19,"model":"Starlight V75"},
                        // {"charge_percent":36.7,"id":20,"model":"Starlight V80"},
                        // {"charge_percent":9.2,"id":21,"model":"Shadow Scream"},
                        // {"charge_percent":12.5,"id":22,"model":"Shadow Scream"},
                        // {"charge_percent":45.0,"id":23,"model":"Shadow Scream"},
                        // {"charge_percent":48.9,"id":24,"model":"Shadow Scream"},
                        // {"charge_percent":34.6,"id":25,"model":"Shadow Scream"},
                        // {"charge_percent":33.3,"id":26,"model":"Trail Blazer A"},
                        // {"charge_percent":47.2,"id":27,"model":"Trail Blazer A"},
                        // {"charge_percent":75.4,"id":28,"model":"Trail Blazer XY"},
                        // {"charge_percent":35.2,"id":29,"model":"Trail Blazer Z"},
                        // {"charge_percent":84.6,"id":30,"model":"Trail Blazer Z+"}
]
  const [scooters, setScooters] = useState(ScootersData);
  const [showAll, setShowAll] = useState(false);
  const handleOpenShowAll = () => setShowAll(true);
  const handleCloseShowAll = () => setShowAll(false);
  const scooter = ScootersData.filter((s) => s.charge_percent > 15);
  // const available_scooter = (ScootersData) =>{
  //   const scooter = ScootersData.filter((s) => s.charge_percent > 15);
  //   setScooters(scooter)
  // }
  

  // console.log(available_scooter)


  


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
        <button  className='rent_button' type='button' onClick={}>{Available scooter?:All scooter}</button>
        {/* <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        /> */}
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