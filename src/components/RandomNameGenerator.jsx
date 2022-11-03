import { useState } from "react";

const btnStyle = {
  padding: "10px 60px",
  backgroundColor: "green",
  color: "white",
  margin: "10px 0",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontSize: "30px",
  boxShadow: "0 0 5px 5px gray",
};

const RandomNameGenerator = () => {
  const [name, setName] = useState("______");

  const handleNameChange = () => {
    const names = ["Dehan", "Musfiq", "Rahim", "Sohel", "MOhit"];
    const randInt = Math.floor(Math.random() * names.length);
    setName(names[randInt]);
  };

  return (
    <div>
      <h1>{name}</h1>

      <button style={btnStyle} onClick={handleNameChange}>
        Generate Name
      </button>
    </div>
  );
};

export default RandomNameGenerator;
