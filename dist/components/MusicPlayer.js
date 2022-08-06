import React, { useEffect, useRef, useState } from "react";
import SongSelector from "./SongSelector";
import AlbumArt from "./AlbumArt";
import SongControls from "./SongControls";
function MusicPlayer() {
    var _a = useState(0), song = _a[0], setSong = _a[1];
    var _b = useState([]), songList = _b[0], setSongList = _b[1];
    //I use playing as a state variable incase i want to add some component that changes when music is played
    var _c = useState(false), playing = _c[0], setPlaying = _c[1];
    //The code below initialize the audioRef variable
    var audioSrc = "";
    var audio = new Audio(audioSrc);
    audio.loop = true;
    var audioRef = useRef(audio);
    function playSong(song) {
        //Pause the current song if there is any
        audioRef.current.pause();
        audioRef.current.src = "https://acnhapi.com/v1/music/" + song;
        audioRef.current.load();
        audioRef.current.play();
    }
    useEffect(function () {
        if (song) {
            playSong(song);
            setPlaying(true);
        }
    }, [song]);
    useEffect(function () {
        fetch("http://acnhapi.com/v1/songs", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
            var songs = [];
            for (var key in myJson) {
                songs.push(myJson[key]["name"]["name-USen"]);
            }
            setSongList(songs);
        });
    }, []);
    return (React.createElement("div", { className: "centered" },
        React.createElement(AlbumArt, { song: song }),
        " ",
        React.createElement("p", null),
        React.createElement(SongSelector, { setSong: setSong, songList: songList }),
        " ",
        React.createElement("p", null),
        React.createElement(SongControls, { audioRef: audioRef, playing: playing, setPlaying: setPlaying, song: song, setSong: setSong })));
}
export default MusicPlayer;
