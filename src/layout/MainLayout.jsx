import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Player from '../components/Player'
import NowPlaying from '../components/NowPlaying'
import FavoriteSidebar from '../components/FavoriteSlidebar'

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-black">

      {/* Navbar */}
      <div className="h-[10%]">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className=" p-2 grid gap-4 grid-cols-[280px_1fr_280px]
 overflow-hidden">

        {/* Left Sidebar */}
        <div className=''>
          <FavoriteSidebar  />
        </div>

        {/* Middle Content */}
        <div className="border shadow-xl  rounded overflow-auto">
          <Outlet />
        </div>

        {/* Right Now Playing */}
        <div className=" h-[85%] border bg-gray-300 rounded shadow-xl overflow-auto">
          <NowPlaying />
        </div>

      </div>

      {/* Player Bottom Bar */}
      
        <Player />
      

    </div>
  )
}

export default MainLayout
