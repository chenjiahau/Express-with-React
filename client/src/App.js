import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const callBackendAPI = async () => {
    const response = await fetch('/express-test');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        setMessage(res.message)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
