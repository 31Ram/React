import React, { useState } from "react";

const Cought = () => {
  const pokemons = ["Pikachu", "Squirtle", "Snorlax", "Charmander", "Rataque", "Kakuna"];
  let [list, setList] = useState([]);

  const handleClick = () => {
    const random = Math.floor(Math.random() * pokemons.length);
    setList(list.concat(pokemons[random]));
  };

  return (
    <>
      <button onClick={handleClick}>Random pokemons</button>
      <ul>
        {list.map((item, index) => {
          return (<li key={index}>{item}</li>)
        })}
      </ul>
    </>
  )
};

export default Cought;
