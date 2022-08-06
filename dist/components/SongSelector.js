import React from "react";
function SongSelector(_a) {
    var songList = _a.songList, setSong = _a.setSong;
    var handleChange = function (event) {
        setSong(Number(event.target.value));
    };
    return (React.createElement("div", { className: "song-selector" },
        React.createElement("select", { defaultValue: "default", className: "dropbtn ", onChange: handleChange },
            React.createElement("option", { value: "default", hidden: true }, "Select a song"),
            songList.map(function (option, index) { return (React.createElement("option", { key: index, value: index + 1 }, option)); }))));
}
export default SongSelector;
