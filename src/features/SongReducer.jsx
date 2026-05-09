import { createSlice } from "@reduxjs/toolkit";

let SongSlice = createSlice({
  name: "songs",   // ❗ FIXED (space removed)

  initialState: {
    currentSong: null,
    isPlaying: false,
    gaana: [],
    currentIndex: 0,
    queue: [],
    favoriteSongs:  JSON.parse(localStorage.getItem("favoriteSongs")) || [],   // ❗ FIXED (correct key)
  },

  reducers: {
    addSong: (state, action) => {
      state.currentSong = action.payload;

      state.currentIndex = state.gaana.findIndex(
        (song) => song.id === action.payload.id
      );

      state.isPlaying = true;
    },

    play: (state) => {
      state.isPlaying = true;
    },

    pause: (state) => {
      state.isPlaying = false;
    },

    setSongs: (state, action) => {
      state.gaana = action.payload;
    },

    nextSong: (state) => {
      if (state.currentIndex < state.gaana.length - 1) {
        state.currentIndex++;
        state.currentSong = state.gaana[state.currentIndex];
      }
    },

    prevSong: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        state.currentSong = state.gaana[state.currentIndex];
      }
    },

    addToQueue: (state, action) => {
      state.queue.push(action.payload);
    },

    // ⭐ ADD TO FAVORITES
    addToFavorites: (state, action) => {
  const exists = state.favoriteSongs.find(s => s.id === action.payload.id);
  if (!exists) {
    state.favoriteSongs.push(action.payload);
    localStorage.setItem("favoriteSongs", JSON.stringify(state.favoriteSongs));
  }
},

removeFromFavorites: (state, action) => {
  state.favoriteSongs = state.favoriteSongs.filter(
    (song) => song.id !== action.payload.id
  );
  localStorage.setItem("favoriteSongs", JSON.stringify(state.favoriteSongs));
},


    
    
  },
});

export let {
  addSong,
  play,
  pause,
  nextSong,
  prevSong,
  setSongs,
  addToQueue,
  addToFavorites,
  removeFromFavorites,
} = SongSlice.actions;

export default SongSlice.reducer;
