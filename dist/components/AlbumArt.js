import React from "react";
function AlbumArt(_a) {
    var song = _a.song;
    return song ? (React.createElement("img", { className: "album-image", src: "https://acnhapi.com/v1/images/songs/" + song, alt: "", width: "150", height: "150" })) : (React.createElement("img", { className: "album-image", src: "./jukebox.webp", alt: "", width: "150", height: "150" }));
}
export default AlbumArt;
