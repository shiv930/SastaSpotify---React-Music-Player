import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../features/SongReducer";

// GLOBAL AUDIO INSTANCE (never recreated)
const globalAudio = new Audio();

export let useSong = () => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying } = useSelector((state) => state.songs);

  // audioRef always points to same globalAudio
  const audioRef = useRef(globalAudio);

  const [isMuted, setIsMuted] = useState(false);

  // Load song only when song changes
  useEffect(() => {
    if (!currentSong) return;

    const audio = audioRef.current;

    audio.pause();
    audio.src = currentSong.url;
    audio.load();
  }, [currentSong]);

  // Play / Pause logic
  useEffect(() => {
    if (!currentSong) return;

    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  // Play handler
  const handlePlay = (song) => {
    dispatch(addSong(song));
  };

  // Volume
  const handleVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };

  // Mute
  const handleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return {
    audioRef,
    handlePlay,
    handleMute,
    isMuted,
    handleVolume,
  };
};
