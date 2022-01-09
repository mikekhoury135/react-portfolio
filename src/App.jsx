import React from 'react';
import './App.css';
import { CustomCard } from './Components';
import image from './Assets/image0.jpg';

function App() {
  return (
    <div className="App">
      <CustomCard title="Test" image={image} body="This is my son." />
    </div>
  );
}

export default App;
