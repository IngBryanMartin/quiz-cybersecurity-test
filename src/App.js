// App.js

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
        <h1>¡ES HORA DE PONER A<br />PRUEBA TUS CONOCIMIENTOS<br />EN CIBERSEGURIDAD!</h1>
        <h2>¿CREES ESTAR LISTO<br />PARA EL DESAFIO?</h2>
        <input
          type="text"
          placeholder="DIGITA TU NOMBRE COMPLETO"
          value={name}
          onChange={handleChange}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="buttons">
          <button onClick={handleSubmit}>EMPEZAR</button>
          <a href="https://www.google.com/">VER CLASE</a>
        </div>
      </div>
    </div>
  );
}

export default App;
