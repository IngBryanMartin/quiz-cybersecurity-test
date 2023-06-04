import React, { useState } from 'react';
import './App.css';
import { firestore } from './firebase';

function App() {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.length >= 8 && name.length <= 30) {
      // Guarda el nombre en la base de datos de Firebase
      firestore.collection('participants').add({ name });

      // Aquí puedes redirigir al participante a la siguiente página del cuestionario
    } else {
      setErrorMessage('Es necesario digitar un nombre válido');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="App">
      <div className="content">
        <div className="title">
        <h1>¡ES HORA DE PONER A<br />PRUEBA TUS CONOCIMIENTOS<br />EN CIBERSEGURIDAD!</h1>
        </div>
        <div className="subtitle">
        <h2>¿CREES ESTAR LISTO PARA EL DESAFIO?</h2>
        </div>
        <div className="name">
        <h3>Mi nombre es...</h3>
        <input
          type="text"
          placeholder="DIGITA TU NOMBRE COMPLETO"
          value={name}
          onChange={handleChange}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="buttons">
          <button className="start-btn" onClick={handleSubmit}>ESTOY LISTO</button>
          <a className="goto-btn" href="https://www.google.com/">VER CLASE</a>
        </div>
      </div>
    </div>
  );
}

export default App;
