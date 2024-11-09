/* eslint-disable react/prop-types */

const Weather = ({data}) => {
  console.log(data);
  return (
    <div>
      {data.weather ? (
        <div className='w-[500px] h-[260px] bg-gray-500 shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <p className="text-2xl font-bold my-2 ml-4">{data.name}, {data.sys.country}</p>
                <p className="text-sm">{data.weather[0].description}</p>
              </div>
              <div>
                <h1 className="text-6xl font-bold ml-10 my-8">{Math.round(data.main.temp)}°C</h1>
              </div>
              </div> 
            </div>

            <div className="w-1/2 ml-10 flex justify-between flex-col items-end">
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