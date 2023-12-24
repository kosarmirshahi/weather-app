import icon from "../../assets/mahicon.png";
import background from "../../assets/Background.png";
import Rest from "../RestOfInformation/Rest";

function Result() {
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
              <p>Tehran- Varamin</p>
              <p className="text-xl">25th april</p>
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
