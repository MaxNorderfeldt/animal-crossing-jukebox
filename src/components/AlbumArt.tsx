import React from "react";

function AlbumArt({ song }: { song: string }) {
  return song ? (
    <img
      className="album-image"
      src={"https://acnhapi.com/v1/images/songs/" + song}
      alt=""
      width="150"
      height="150"
    ></img>
  ) : (
    <img
      className="album-image"
      src={"./jukebox.webp"}
      alt=""
      width="150"
      height="150"
    ></img>
  );
}

export default AlbumArt;
