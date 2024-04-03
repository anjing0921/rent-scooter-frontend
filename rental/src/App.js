// import logo from './logo.svg';
import './App.css';
import Header from "./componets/Header"

import ScooterList from './componets/ScooterList';

function App() {
  return (
    <div className="App">
      <Header/>
    <section>
      <div>
        <ScooterList/>
      </div>
    </section>
    </div>
  );
}

export default App;
