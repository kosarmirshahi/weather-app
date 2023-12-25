import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import axios from "axios";
function MainPage() {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);

  const accessToken =
    "pk.eyJ1IjoiYW1pcm5iayIsImEiOiJja3JjY210cWYwam53MzBwZW1yYTZtN2phIn0.5Jx88DAjR4jh0QJ-kXHYoQ";
  useEffect(() => {
    async function fetchSearchResult() {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/search/searchbox/v1/forward?q=te`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Set your token in the Authorization header
              // Add any other headers if required
              "Content-Type": "application/string", // Example of setting Content-Type header
            },
          }
        );

        console.log(response);
        console.log("ll");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    console.log(Headers);

    fetchSearchResult();
  }, []);
  function handleSubmit() {}
  return (
    <>
      <div className="container w-1/4 m-auto text-white flex flex-col gap-y-16 text-center mt-12">
        <div className="">
          <img src={Logo} alt="pic" className="m-auto" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-3xl">Enchanting Weather</h2>
          <p>The World Behind Your Window !!</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter the name of city"
              className="w-full h-12 bg-[#1E1E29] border-none outline-none rounded-lg pl-2.5 text-sm"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </form>
        </div>
      </div>
      <div className="suggests w-1/4 m-auto text-white flex flex-col">
        <div className="bg-[#3B3B54] h-12 rounded-lg pl-2.5 text-sm py-3">
          <p>tehran-tehran-varamin</p>
        </div>
      </div>
    </>
  );
}

export default MainPage;
