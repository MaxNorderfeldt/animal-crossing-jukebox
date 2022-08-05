import React, { FC, useEffect, useRef, useState } from "react";
import SongSelector from "./SongSelector.tsx";
import AlbumArt from "./AlbumArt";
import SongControls from "./SongControls";

function MusicPlayer() {
  const [song, setSong] = useState("");
  const [songList, setSongList] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (song) {
      audioRef.current.pause();
      audioRef.current.src = "https://acnhapi.com/v1/music/" + song;
      audioRef.current.load();
      audioRef.current.play();
      setPlaying(true);
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

  //refs
  const audioSrc = "";
  const audio = new Audio(audioSrc);
  audio.loop = true;
  const audioRef = useRef(audio);

  return (
    <div className="centered">
      <AlbumArt song={song}></AlbumArt> <p />
      <SongSelector setSong={setSong} songList={songList} /> <p />
      <SongControls
        audioRef={audioRef}
        playing={playing}
        setPlaying={setPlaying}
        song={song}
        setSong={setSong}
      />
    </div>
  );
}

export default MusicPlayer;
