import React, { useEffect, useRef } from "react";
import SongSelector from "./SongSelector";

function MusicPlayer() {
  const [song, setSong] = React.useState();
  const [songList, setSongList] = React.useState();

  useEffect(() => {
    if (song) {
      audioRef.current.pause();
      audioRef.current.src = "https://acnhapi.com/v1/music/" + song;
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [song]);

  useEffect(() => {
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
        let songs = [];
        for (const key in myJson) {
          songs.push(myJson[key]["name"]["name-USen"]);
        }
        setSongList(songs);
      });
  }, []);

  useEffect(() => {
    console.log(songList);
  }, [songList]);

  //refs
  const audioSrc = "";
  const audio = new Audio(audioSrc);
  audio.loop = true;
  const audioRef = useRef(audio);

  return <SongSelector setSong={setSong} songList={songList}></SongSelector>;
}

export default MusicPlayer;
