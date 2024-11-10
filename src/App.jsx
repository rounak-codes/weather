import './App.css';
import { useState } from 'react';  // Import useState from React
import axios from 'axios';  // Import axios correctly
import Weather from './components/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const API_KEY = import.meta.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`; // Fix string interpolation

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');  // Move this line inside the if statement
    }
  };

  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input
          type='text' className='py-3 px-6 w-[700px] text-lg rounded-3xl border-gray-200 text-gray-600 placeholder:text-gray-800 focus:outline-none bg-gray-500 shadow-md' placeholder='Enter Location' value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}  // Change onKeyDownCapture to onKeyDown
        />
      </div>
      <Weather data={data} />
    </div>
  );
}

export default App;
