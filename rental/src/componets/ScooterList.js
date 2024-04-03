import React from "react";
// import axios from "axios";
import { useEffect, useState} from "react";
import ScooterCard from "./ScooterCard"
import './ScooterList.css';

const ScooterList = () => {
  const [scooters, setScooters] = useState([]);


  const fetchScooters = async () => {
    // const { data } = await axios.get(
    //   `http://127.0.0.1:5000/scooters`
    // );
    // setScooters(data);
  };
  console.log(scooters)
  useEffect(() => {
    window.scroll(0, 0);
    fetchScooters();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <span className="pageTitle">rent a scooter</span>
      <div className="list">
        {scooters.map((s)=> (
          <ScooterCard 
          key={s.id}
          id={s.id}
          model={s.model}
          charge_percent={s.charge_percent}
          />
        ))}
      </div>
    </div>
  );
};

export default ScooterList;