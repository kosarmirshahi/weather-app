import { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../assets/mahicon.png";
import background from "../../assets/Background.png";
import Rest from "../RestOfInformation/Rest";

function Result() {
  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");
  // localStorage.clear();
  const [information, setInformation] = useState<string[]>([]);
  const token = "d14adfbb5367bc704722d0ebd228f5a4";
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${token}`
        );
        setInformation(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchWeather();
  }, []);
  console.log(information);
  function changeDate() {
    const unixTimestamp = information.dt;
    const date = new Date(unixTimestamp * 1000);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  }
  return (
    <div className="container flex justify-around p-5 text-white mt-7">
      <div className="rightSection w-48 bg-[#16161F] rounded-xl p-5">
        <div className="mah relative rounded-xl h-[540px]">
          <img
            src={background}
            alt="background"
            className="absolute z-10 w-full h-full object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between h-full p-7">
            <div className="z-10 text-3xl flex flex-col gap-y-4">
              <p>{information.name}</p>
              <p className="text-xl">{changeDate()}</p>
            </div>
            <div className="flex z-10 items-center justify-around">
              <div className="text-7xl">28 C</div>
              <div>
                <img src={icon} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rest />
    </div>
  );
}

export default Result;
