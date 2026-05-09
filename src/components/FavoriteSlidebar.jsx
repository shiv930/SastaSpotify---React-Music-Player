import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../features/SongReducer";
import { Search, Heart, HeartOff } from "lucide-react";

const FavoriteSidebar = () => {
  const dispatch = useDispatch();
  const { favoriteSongs } = useSelector((state) => state.songs);

  return (
<div className="h-143 w-full bg-[#121212] text-white p-4 rounded-xl border border-white/10 shadow-xl overflow-y-scroll">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-wide">Your Library</h2>
        <Heart className="text-pink-500" />
      </div>

      {/* CATEGORY TABS */}
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 bg-white/10 rounded-full text-sm">Favorites</button>
        <button className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">Artists</button>
        <button className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">Albums</button>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg mb-4">
        <Search size={18} className="text-gray-300" />
        <input
          type="text"
          placeholder="Search in favorites"
          className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
        />
      </div>

      {/* EMPTY STATE */}
      {favoriteSongs.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <p>No favorite songs yet</p>
          <p className="text-green-400 mt-1">Add some songs…</p>
        </div>
      )}

      {/* FAVORITE SONGS LIST */}
      <div className="flex flex-col gap-4">
        {favoriteSongs.map((song) => (
          <div
            key={song.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            {/* CIRCLE IMAGE LIKE SPOTIFY */}
            <img
              src={song.thumbnail}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div className="flex-1">
              <h3 className="text-sm font-semibold line-clamp-2">{song.title}</h3>
              <p className="text-xs text-gray-400 line-clamp-4">{song.artist}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromFavorites(song))}
              className="p-2  rounded-full bg-red-500/20 hover:bg-red-500/40 transition"
            >
              <HeartOff size={16} className="text-red-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteSidebar;
