import './App.css';
import harrow from './data/Harrow.json'
import heathrow from './data/Heathrow.json'
import stratford from './data/Stratford.json'
import { useEffect, useState } from 'react';
import Row from './components/Row';


function App() {

  const cities = {harrow, heathrow, stratford};
  
  const [city, setCity] = useState("harrow");
  const [category, setCategory] = useState("hospitals");
  const [result, setResult] = useState();
  
  
  useEffect(() => {
    if(city) setResult(cities[city][category]);
  }, [city, category, cities])

  return (
    <div className="container">
      <h1 className="text-center">City Mini Guide</h1>
      {/* Dropdown */}
      <div className="city-select d-flex justify-content-center">
        <select className="form-select w-25" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="none">Select City</option>
          <option value="harrow">Harrow</option>
          <option value="heathrow">Heathrow</option>
          <option value="stratford">Stratford</option>
        </select>
      </div>
      {/* Buttons */}
      <div>
        <button className="btn btn-light" onClick={(e) => setCategory("pharmacies")}>1</button>
        <button className="btn btn-light">2</button>
        <button className="btn btn-light">3</button>
        <button className="btn btn-light">4</button>
      </div>
      {/* table */}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <Row info={result} />
      </table>
    </div>

  );
}

export default App;
