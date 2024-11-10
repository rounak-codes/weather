/* eslint-disable react/prop-types */

const Weather = ({data}) => {
  console.log(data);
  return (
    <div>
      {data.weather ? (
        <div className='w-[500px] h-[300px] bg-orange-300 shadow-lg rounded-xl m-auto relative px-6 py-6'>
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-around items-center">
            <div className="flex flex-col items-start justify-start h-full">
              <div className="text-black">
                <p className="text-2xl font-bold my-2 ml-4 text-center">{data.name}, {data.sys.country}</p>
                <p className="text-sm mx-6 text-left">{data.weather[0].description}</p>
              </div>
              <div className="text-black text-center">
                <h1 className="text-6xl font-bold mx-4 my-8">{Math.round(data.main.temp)}°C</h1>
              </div>
              </div> 
            </div>

            <div className="text-black w-1/2 mx-4 flex justify-between flex-col items-end">
              <div className="relative">
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
              alt="" className="w-[120px]"/>
              </div>
              {data.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex justify-between gap-x-8">
                    <p>Feels Like</p>
                    <p className="font-bold w-20">{Math.round(data.main.feels_like)}°C</p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Humidity</p>
                    <p className="font-bold w-20">{Math.round(data.main.humidity)}%</p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Wind Speed</p>
                    <p className="font-bold w-20">{Math.round(data.wind.speed)}KPH</p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Pressure</p>
                    <p className="font-bold w-20">{Math.round(data.main.pressure)}hPa</p>
                  </div>
                </div>
                ) : null}
            </div>
          </div>
        </div>
      ):null}
    </div>
  )
}

export default Weather