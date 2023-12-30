import React from "react";

const Loader = () => {
  return (
    <div className="m-auto w-full flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;
