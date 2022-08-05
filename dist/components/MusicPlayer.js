import React, { useEffect, useRef, useState } from "react";
import SongSelector from "./SongSelector.tsx";
function MusicPlayer() {
    var _a = useState(""), song = _a[0], setSong = _a[1];
    var _b = useState([]), songList = _b[0], setSongList = _b[1];
    useEffect(function () {
        if (song) {
            audioRef.current.pause();
            audioRef.current.src = "https://acnhapi.com/v1/music/" + song;
            audioRef.current.load();
            audioRef.current.play();
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
    useEffect(function () {
        console.log(songList);
    }, [songList]);
    //refs
    var audioSrc = "";
    var audio = new Audio(audioSrc);
    audio.loop = true;
    var audioRef = useRef(audio);
    return React.createElement(SongSelector, { setSong: setSong, songList: songList });
}
export default MusicPlayer;
