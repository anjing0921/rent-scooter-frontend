
import './App.css';
// import Header from "./componets/Header"
// import Reservation from './componets/Reservation';
import { useHistory } from 'react-router-dom';
import ScooterList from './componets/ScooterList';

function App() {
  return (
      <div className="App">
        <section>
          {/* <span><Header/></span> */}
          <section>
            <div>
              <ScooterList/>
            </div>
            <div>
              {/* <Reservation/> */}
            </div>
          </section>
        </section>
      </div>
  );
}

export default App;
