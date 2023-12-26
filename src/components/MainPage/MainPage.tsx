import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const navigate = useNavigate();

  const accessToken =
    "pk.eyJ1IjoiYW1pcm5iayIsImEiOiJja3JjY210cWYwam53MzBwZW1yYTZtN2phIn0.5Jx88DAjR4jh0QJ-kXHYoQ";
  useEffect(() => {
    async function fetchSearchResult() {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            inputValue
          )}.json?access_token=${accessToken}`
        );

        setSearchResult(response.data.features);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSearchResult();
  }, [inputValue]);

  function handleClickSuggest(suggest: string) {
    const lat = suggest.center[0];
    const long = suggest.center[1];
    localStorage.setItem("latitude", lat.toString());
    localStorage.setItem("longitude", long.toString());
    navigate(`/weather`);
  }
  return (
    <>
      <div className="container w-1/3 m-auto text-white flex flex-col gap-y-16 text-center mt-12">
        <div className="">
          <img src={Logo} alt="pic" className="m-auto" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-3xl">Enchanting Weather</h2>
          <p>The World Behind Your Window !!</p>
        </div>
        <div className="form">
          <form>
            <input
              type="text"
              placeholder="Enter the name of city"
              className="w-full h-14 bg-[#1E1E29] border-none outline-none rounded-lg pl-2.5 text-sm"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </form>
        </div>
      </div>
      <div className="suggests w-1/3 m-auto text-white flex flex-col gap-y-1 mt-1">
        {searchResult.map((suggest) => (
          <div
            className="bg-[#3B3B54] h-14 rounded-lg pl-2.5 text-xs flex items-center cursor-pointer"
            onClick={() => handleClickSuggest(suggest)}
          >
            <p>{suggest.place_name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;
