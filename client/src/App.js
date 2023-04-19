import './App.scss';

import { useState } from 'react';

function App() {
  const [value, setValue] = useState({
    email: '',
    name: '',
    password: '',
    gender: 'm'
  });

  const changeValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const checkForm = () => {
    if (value.email === '' || value.name === '' || value.password === '') {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" className="form-control" id="email" name="email" autoComplete="new-password" onChange={changeValue} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" autoComplete="new-password" onChange={changeValue} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" autoComplete="new-password" onChange={changeValue} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select className="form-control" name="gender">
            <option value="m">M</option>
            <option value="f">F</option>
          </select>
        </div>
        <div className="form-group form-group--button">
          <button className="form-group--align-right" disabled={checkForm()}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
