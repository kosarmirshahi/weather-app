import { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../assets/mahicon.png";
import background from "../../assets/Background.png";
import Rest from "../RestOfInformation/Rest";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

interface WeatherData {
  timezone: string;
  current_weather: {
    time: number;
    temperature: number;
    // Add other properties as needed
  };
  // Add other properties as needed
}
function Result() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");
  const [information, setInformation] = useState<WeatherData | null>(null);
  const [time, setTime] = useState<number>(0);
  const [temperature, setTemperature] = useState<number>(0);

  // const token = "3b97dacd87324ddab9a105735232612";
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`
        );
        setInformation(response.data);
        setTime(response.data.current_weather.time);
        setTemperature(response.data.current_weather.temperature);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchWeather();
  }, [lat, long]);
  if (time === 0) return <Loader />;
  return (
    <div className="container m-auto flex flex-col md:flex-row justify-between p-5 text-white mt-7">
      <div className="rightSection w-full lg:w-45 md:w-49 sm:w-full bg-[#16161F] rounded-xl p-5">
        <div className="mah relative rounded-xl h-[540px]">
          <img
            src={background}
            alt="background"
            className="absolute z-10 w-full h-full object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between h-full p-7">
            <div className="z-10 text-3xl flex flex-col gap-y-4">
              <p>{information.timezone}</p>
              <p className="text-xl">{time}</p>
            </div>
            <div className="flex z-10 items-center justify-around">
              <div className="text-7xl flex">
                <p>{temperature}</p>
                <p> C</p>
              </div>
              <div>
                <img src={icon} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rest information={information} />
    </div>
  );
}

export default Result;
