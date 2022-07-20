import React, { useEffect, useRef } from "react";

function MusicPlayer() {
  const [song, setSong] = React.useState();
  const [songList, setSongList] = React.useState();

  const handleChange = (event) => {
    setSong(event.target.value);
  };

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
  const audioSrc = "https://acnhapi.com/v1/music/8";
  const audio = new Audio(audioSrc);
  audio.loop = true;
  const audioRef = useRef(audio);

  return (
    <div className="centered">
      <select
        defaultValue="default"
        className="dropbtn"
        onChange={handleChange}
      >
        <option value="default" disabled hidden>
          Select a category
        </option>
        <option> 1</option>
        <option> 2</option>
        <option> 32</option>
      </select>
    </div>
  );
}

export default MusicPlayer;
