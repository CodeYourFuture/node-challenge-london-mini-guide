import React from 'react';
import { useState } from 'react';



function CityCategorySelect() {
  const [table, setTable] = useState([]);

  //cities option
  const options = [
    { value: '', text: '--Select--' },
    { value: 'Harrow', text: 'Harrow' },
    { value: 'Heathrow', text: 'Heathrow' },
    { value: 'Stratford', text: 'Stratford' },
  ];
  const [city, setCity] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.value)
    const city = e.target.value
    setCity(city)
  }
  //category option
  const buttons = [
    { value: 'pharmacies', text: 'pharmacies' },
    { value: 'doctors', text: 'doctors' },
    { value: 'hospitals', text: 'hospitals' },
    { value: 'colleges', text: 'colleges' },
  ];
  const [category, setCategory] = useState([])
  const [isActive, setIsActive] = useState(false)
  const handleClick = (e, value) => {
    setIsActive(value)
    console.log(e.target.value)
    const category = e.target.value;
    setCategory(category)
    if (city) {
      setCategory(category);
      fetch(`http://localhost:3001/${city}/${category}`)
        .then(response => response.json())

        .then(data => {
          console.log(data)
          setTable(data)
        })
    }
    else {
      alert('Choose city first');
    }
  }

  return (

    <>
      <div className='wrap'>
        <div>
          <select className='city_select' onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>

        <div className='category_buttons'>
          < >
            {buttons.map((button, value) => (
              <button
                style={{ backgroundColor: isActive === value ? '#03B5AA' : 'white' }}
                onClick={(e) => handleClick(e, value)}
                key={button.value}
                value={button.value}>
                {button.text}
              </button>
            ))}
          </>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {
            table.map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem.name}</td>
                  <td>{elem.phone}</td>
                  <td>{elem.address}</td>
                  <td>{elem.website}</td>
                </tr>)
            })
          }

        </tbody>
      </table>

    </>
  )

}

export default CityCategorySelect;