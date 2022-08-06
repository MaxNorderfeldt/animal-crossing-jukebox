import React from "react";

function SongControls({ audioRef, playing, setPlaying, song, setSong }) {
  function handleClick() {
    if (playing) {
      audioRef.current.pause();
    } else {
      //I want it to play the first song if no song is selected
      if (!song) {
        setSong(1);
      }
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <div>
      <button
        id="audio-control"
        className={playing ? "pause-icon" : "play-icon"}
        onClick={handleClick}
      ></button>
    </div>
  );
}

export default SongControls;
