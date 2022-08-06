import React from "react";
function SongControls(_a) {
    var audioRef = _a.audioRef, playing = _a.playing, setPlaying = _a.setPlaying, song = _a.song, setSong = _a.setSong;
    function handleClick() {
        if (playing) {
            audioRef.current.pause();
        }
        else {
            //I want it to play the first song if no song is selected
            if (!song) {
                setSong(1);
            }
            audioRef.current.play();
        }
        setPlaying(!playing);
    }
    return (React.createElement("div", null,
        React.createElement("button", { id: "audio-control", className: playing ? "pause-icon" : "play-icon", onClick: handleClick })));
}
export default SongControls;
