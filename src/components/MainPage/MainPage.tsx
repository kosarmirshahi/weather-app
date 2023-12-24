import Logo from "../../assets/Logo.png";
function MainPage() {
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
          <form>
            <input
              type="text"
              placeholder="Enter the name of city"
              className="w-full h-12 bg-[#1E1E29] border-none outline-none rounded-lg pl-2.5 text-sm"
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
