import React from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music2,
} from "lucide-react";
import { useSong } from "../Hooks/SongsLogic";

import { useDispatch, useSelector } from "react-redux";
import { pause, play, nextSong, prevSong } from "../features/SongReducer";

const Player = () => {
  const { isPlaying, currentSong, currentIndex, gaana } = useSelector(
    (store) => store.songs,
  );

  const dispatch = useDispatch();
  let {handleVolume, handleMute,isMuted} =useSong()

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#121212]/95 backdrop-blur-md border-t border-gray-800 px-6 py-2 z-50 shadow-2xl">
      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 w-[30%]">
          {currentSong ? (
            <img
              src={currentSong.thumbnail}
              alt=""
              className="h-16 w-16 rounded-xl object-cover shadow-lg"
            />
          ) : (
            <div className="h-16 w-16 rounded-xl bg-[#282828] flex items-center justify-center">
              <Music2 size={30} className="text-gray-400" />
            </div>
          )}

          <div>
            <h1 className="text-white font-semibold text-md">
              {currentSong ? currentSong.title : "No song selected"}
            </h1>

            <p className="text-gray-400 text-sm">
              {currentSong ? currentSong.artist : "Choose a song to play"}
            </p>
          </div>
        </div>

        {/* CENTER CONTROLS */}
        <div className="flex flex-col items-center gap-3 w-[40%] mr-50">
          <div className="flex items-center gap-6">
            {/* BACK */}
            <button className="text-gray-400 cursor-pointer hover:text-white transition hover:scale-110">
              <SkipBack onClick={() => dispatch(prevSong())} size={28} />
            </button>

            {/* PLAY / PAUSE */}
            <button
              disabled={!currentSong}
              className={`h-14 w-14 cursor-pointer rounded-full flex items-center justify-center transition shadow-xl
              
              ${
                currentSong
                  ? "bg-white hover:scale-110"
                  : "bg-gray-500 cursor-not-allowed"
              }
              
              `}
            >
              {isPlaying ? (
                <Pause
                  size={28}
                  fill="black"
                  className="text-black"
                  onClick={() => dispatch(pause())}
                />
              ) : (
                <Play
                  size={28}
                  fill="black"
                  className="text-black ml-1"
                  onClick={() => dispatch(play())}
                />
              )}
            </button>

            {/* NEXT */}
            <button className="text-gray-400 cursor-pointer hover:text-white transition hover:scale-110">
              <SkipForward onClick={() => dispatch(nextSong())} size={28} />
            </button>
          </div>

          {/* PROGRESS BAR */}
          

            
        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-3'>

  {
    isMuted
    ? (
        <VolumeX
          size={22}
          onClick={handleMute}
          className='text-white cursor-pointer'
        />
      )
    : (
        <Volume2
          size={22}
          onClick={handleMute}
          className='text-white cursor-pointer'
        />
      )
  }

  <input
    type="range"
    min="0"
    max="100"
    defaultValue="100"
    onChange={handleVolume}
    className='w-28 cursor-pointer'
  />

</div>
      </div>
    </div>
  );
};

export default Player;
