import React from "react";

const Header = () => {
  return (
    <header className="bg-orange-700 h-20 flex items-center justify-between px-10">
      <div>
       
        <img
          src="circleLogo.png"
          alt="logo"
          className="h-18"
        />
      </div>

     
      <div className="flex items-center gap-6">
        <button className="text-white font-medium hover:text-gray-200 transition">
          Login
        </button>

        <button className="bg-white text-orange-700 px-5 py-2 rounded-lg font-medium hover:bg-orange-700 hover:text-white transition-all duration-300transition">
          Register
        </button>
      </div>

    </header>
  );
};

export default Header;