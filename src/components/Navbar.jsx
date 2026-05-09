import React from "react";
import {
  GroupIcon,
  Home,
  NotebookIcon,
  Search,
  Download,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/"); // correct navigation
  };

  const userName = localStorage.getItem("userName");
  const firstLetter = userName ? userName[0].toUpperCase() : "U";

  return (
    <div className="w-full bg-black text-white">
      <div className="h-[68px] flex items-center justify-between px-6">

        {/* Left Logo */}
        <div>
          <img
            className="w-10 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
            alt="spotify"
          />
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center cursor-pointer transition">
            <Home size={24} fill="white" />
          </div>

          <div className="flex items-center bg-zinc-900 hover:bg-zinc-800 px-4 h-12 rounded-full w-[500px] border border-transparent hover:border-zinc-600 transition">
            <Search className="text-zinc-400" size={22} />
            <input
              className="bg-transparent outline-none px-4 w-full text-white placeholder:text-zinc-400"
              type="text"
              placeholder="What do you want to play?"
            />
            <div className="w-[1px] h-6 bg-zinc-600 mx-3"></div>
            <NotebookIcon className="text-zinc-400 cursor-pointer" size={25} />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          <button className="bg-white text-black cursor-pointer font-semibold px-6 py-1.5 rounded-full hover:scale-105 transition">
            Explore Premium
          </button>

          <div className="flex items-center gap-2 text-zinc-300 hover:text-white cursor-pointer transition font-medium">
            <Download size={18} />
            <span>Install App</span>
          </div>

          <Bell size={20} className="text-zinc-300 hover:text-white cursor-pointer transition" />
          <GroupIcon size={20} className="text-zinc-300 hover:text-white cursor-pointer transition" />

          {/* Profile + Logout */}
          <div
            onClick={logout}
            className="w-11 h-11 rounded-full bg-orange-400 flex items-center justify-center font-bold text-black cursor-pointer hover:scale-105 transition"
          >
            {firstLetter}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
