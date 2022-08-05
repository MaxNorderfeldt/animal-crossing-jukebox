import React from "react";
function SongSelector(_a) {
    var songList = _a.songList, setSong = _a.setSong;
    var handleChange = function (event) {
        setSong(event.target.value);
    };
    return (React.createElement("div", { className: "centered" },
        React.createElement("select", { defaultValue: "default", className: "dropbtn", onChange: handleChange },
            React.createElement("option", { value: "default", disabled: true, hidden: true }, "Select a category"),
            songList
                ? songList.map(function (option, index) { return (React.createElement("option", { key: index, value: index + 1 }, option)); })
                : null)));
}
export default SongSelector;
