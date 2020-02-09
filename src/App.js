import React from 'react';
//import input_form from './components/input_form';
import './App.css';

function App() {
  return (
    <div className="App">
      <input_form />
      <form>
        <label>
          Name: 
                    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
