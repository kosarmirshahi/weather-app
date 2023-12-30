import temperature from "../../assets/Vector.png";
import rain from "../../assets/rain.png";
import wind from "../../assets/wind.png";
import water from "../../assets/water.png";
import sun from "../../assets/sun.png";
import rainy from "../../assets/rainwind.png";
import sunny from "../../assets/22.png";
import cloudy from "../../assets/33.png";

function Rest() {
  return (
    <div className="leftSection w-full lg:w-45 md:w-49 sm:w-full flex flex-col gap-y-2.5">
      <div className="top bg-[#16161F] p-5 rounded-xl px-8 flex flex-col gap-y-8">
        <div>
          <p>more information :</p>
        </div>

        <div className="flex justify-between ">
          <div className="flex gap-x-3">
            <img src={temperature} alt="pic" />
            <p>temperature</p>
          </div>
          <div>
            <p>26c</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-x-3">
            <img src={rain} alt="pic" />
            <p>Chance of rain</p>
          </div>
          <div>
            <p>10%</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-x-3">
            <img src={wind} alt="pic" />
            <p>wind speed</p>
          </div>
          <div>
            <p>8km/h</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-x-3">
            <img src={water} alt="pic" />
            <p>water purity</p>
          </div>
          <div>
            <p>40%</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-x-3">
            <img src={sun} alt="pic" />
            <p>sun degree</p>
          </div>
          <div>
            <p>5</p>
          </div>
        </div>
      </div>
      <div className="buttom bg-[#16161F] p-5 rounded-xl px-8 text-xs flex flex-col gap-y-5">
        <div className="">
          <p>The status of the next five days:</p>
        </div>
        <div className="allCards flex justify-between">
          <div className="flex flex-col text-center w-18">
            <p>Saturday</p>
            <img className="w-150 h-150" src={rainy} alt="rain" />
            <p>2c</p>
          </div>
          <div className="flex flex-col text-center w-18">
            <p>Sunday</p>
            <img className="w-150 h-150" src={sunny} alt="rain" />
            <p>7c</p>
          </div>
          <div className="flex flex-col text-center w-18">
            <p>Monday</p>
            <img className="w-150 h-150" src={rainy} alt="rain" />
            <p>5c</p>
          </div>
          <div className="flex flex-col text-center w-18">
            <p>Tuesday</p>
            <img className="w-150 h-150" src={cloudy} alt="rain" />
            <p>4c</p>
          </div>
          <div className="flex flex-col text-center w-18">
            <p>Wednesday</p>
            <img className="w-150 h-150" src={rainy} alt="rain" />
            <p>3c</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rest;
