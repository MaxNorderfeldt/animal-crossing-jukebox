function SongSelector(props) {
  const handleChange = (event) => {
    props.setSong(event.target.value);
  };

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
        {props.songList
          ? props.songList.map(
              (option, index) => (
                console.log(option),
                (
                  <option key={index} value={index + 1}>
                    {option}
                  </option>
                )
              )
            )
          : null}
      </select>
    </div>
  );
}

export default SongSelector;
