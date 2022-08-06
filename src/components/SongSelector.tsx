import React, { Dispatch, SetStateAction } from "react";

function SongSelector({
  songList,
  setSong,
}: {
  songList: string[];
  setSong: Dispatch<SetStateAction<number>>;
}) {
  const handleChange = (event: { target: { value: string } }) => {
    setSong(Number(event.target.value));
  };

  return (
    <div className="song-selector">
      <select
        defaultValue="default"
        className="dropbtn "
        onChange={handleChange}
      >
        <option value="default" hidden={true}>
          Select a song
        </option>
        {songList.map((option: string, index: number) => (
          <option key={index} value={index + 1}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SongSelector;
