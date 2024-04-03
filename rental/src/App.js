
import './App.css';
// import Header from "./componets/Header"

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
          </section>
        </section>
      </div>
  );
}

export default App;
