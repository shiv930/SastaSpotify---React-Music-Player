import React from 'react'
import music from "../utils/songs.json"
import SongCard from '../components/SongCard'
// import { nanoid } from "nanoid";
import { useSong } from "../Hooks/SongsLogic";
import {useDispatch} from 'react-redux'
import { useEffect } from "react"
import { setSongs } from "../features/SongReducer"
const HomePage = () => {
  const { handlePlay } = useSong();
    let Songs = music.map((elem, index)=>{
        return {...elem, id:index}
    })
    let dispatch =useDispatch()
    useEffect(()=>{
      dispatch(setSongs(Songs))
    },[dispatch])
    
  return (
    <div className='flex flex-wrap gap-5 m-4'>
      {
        Songs.map((elem)=>{
            return <SongCard key={elem.id} handlePlay={handlePlay} song={elem}/>
        })
      }
    </div>
  )
}

export default HomePage
