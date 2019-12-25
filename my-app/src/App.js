import React from 'react';
import Car from './Car';

function App() {
  return (
    <div className="App">
      Hello World!
      <hr />
      <h3>Car Component:</h3>
      <hr />
      <Car brand="Suzuki" year="2021" color="yellow" />
      <hr />
      <Car brand="Ferrari" year="2022" color="red" />
    </div>
  );
}

export default App;
