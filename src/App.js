import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';
import "./App.css"

function App() {
  const [currentForm, setCurrentForm] = useState("register");
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="App">
      {currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;