import React from 'react'
import { Play, Heart, HeartOff } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../features/SongReducer'

const SongCard = ({ song, handlePlay }) => {

  const dispatch = useDispatch()
  const { favoriteSongs } = useSelector((state) => state.songs)

  const isFavorite = favoriteSongs.some((s) => s.id === song.id)

  const toggleFavorite = (e) => {
    e.stopPropagation()
    isFavorite
      ? dispatch(removeFromFavorites(song))
      : dispatch(addToFavorites(song))
  }

  return (
    <div
      onClick={() => handlePlay(song)}
      className='group w-[230px] bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl'
    >

      {/* Image */}
      <div className='relative w-full h-44 rounded-lg overflow-hidden mb-4'>
        <img
          src={song.thumbnail}
          className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/10 group-hover:bg-black/30 transition'></div>

        {/* Play Button */}
        <div className='absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
          <div className='h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110'>
            <Play size={22} fill='black' className='ml-1' />
          </div>
        </div>

        {/* Favorite Button */}
        <div
          onClick={toggleFavorite}
          className='absolute top-3 left-3 bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-black/60 transition'
        >
          {isFavorite
            ? <Heart size={18} className='text-red-500 fill-red-500' />
            : <HeartOff size={18} className='text-white' />}
        </div>
      </div>

      {/* Info */}
      <h1 className='text-white font-semibold text-base truncate'>
        {song.title}
      </h1>

      <p className='text-gray-400 text-sm truncate'>
        {song.artist}
      </p>

    </div>
  )
}

export default SongCard
