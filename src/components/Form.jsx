import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    favPokemon: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.name && userData.age && userData.favPokemon) {
      setShow(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <label>Nombre completo: </label>
          <input
            type="text"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label>Edad: </label>
          <input
            type="text"
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label>Pokemon favorito: </label>
          <input
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, favPokemon: e.target.value })
            }
          />
        </div>
        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
      {show ? (
        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
          <h2>¡Se guardaron los siguientes datos con éxito! </h2>
          <h4>Nombre: {userData.name}</h4>
          <h4>Edad: {userData.age}</h4>
          <h4>Pokemon favorito: {userData.favPokemon}</h4>
        </div>
      ) : null}
    </>
  );
};

export default Form;
