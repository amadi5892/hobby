import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hobbies from './Hobbies';
import Card from './components/Card';

function createHobby(Hobbie) {
  return(
   <div class="organize">
    <Card 
    key={Hobbie.id}
    hobby={Hobbie.hobby}
    img={Hobbie.image}
    description={Hobbie.description}
    />
   </div> 
  )
}

function App() {
  return (
    <div className="App">
      <h1>
        <span class="heading">Hobbies</span>
      </h1>

    <dl>
      {Hobbies.map(createHobby)}
    </dl>

    </div>
  );
}

export default App;
