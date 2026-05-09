import React from "react";
import { useSelector } from "react-redux";
import { Music2 } from "lucide-react";

const NowPlaying = () => {
  const { currentSong } = useSelector((store) => store.songs);

  // EMPTY STATE
  if (!currentSong) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-white bg-[#121212] p-6">
        <div className="h-28 w-28 rounded-full bg-white/5 flex items-center justify-center mb-5">
          <Music2 size={50} className="text-gray-400" />
        </div>

        <h2 className="text-xl font-bold">No Song Playing</h2>
        <p className="text-gray-400 mt-2 text-center px-6">
          Play a song to see its details here.  
          <br />  
          <span className="text-green-400 font-semibold">
            “lets bajaiye…”
          </span>
        </p>
      </div>
    );
  }

  // SONG DETAILS UI
  return (
    <div className="h-full overflow-auto bg-[#121212] border-l border-white/10 p-5 flex flex-col text-white">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">Now Playing</h1>
          <p className="text-sm text-gray-400 mt-1">
            Playing from your library
          </p>
        </div>

        <button className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-lg">
          ⋯
        </button>
      </div>

      {/* Album Card */}
      <div className="bg-gradient-to-b from-[#1e1e1e] to-[#181818] rounded-3xl p-4 shadow-2xl border border-white/5">

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={currentSong.thumbnail}
            alt="album"
            className="w-full aspect-square object-cover hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Song Info */}
        <div className="mt-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                {currentSong.title}
              </h2>
              <p className="text-gray-400 mt-1 text-sm">
                {currentSong.artist}
              </p>
            </div>

            <button className="text-2xl hover:scale-110 transition">
              ❤️
            </button>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {currentSong.album && (
              <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs">
                {currentSong.album}
              </span>
            )}

            {currentSong.year && (
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                {currentSong.year}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Lyrics Preview */}
      <div className="mt-6 bg-[#181818] rounded-3xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-lg">Lyrics</h3>
          <button className="text-sm text-green-400 hover:underline">
            Expand
          </button>
        </div>

        <p className="text-sm leading-7 text-gray-300">
          Lyrics not available...
          If you Want Lyrics <a  href={`https://www.google.com/search?q=${currentSong.title}+${currentSong.artist}+lyrics`} 
  target="_blank"
  class="text-green-400 underline">click here</a>
        </p>
      </div>

    </div>
  );
};

export default NowPlaying;
