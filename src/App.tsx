import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="charts">
        <img
          style={{ marginTop: 100 }}
          src='https://www.chartjs.org/docs/latest/favicon.ico'
        />
        <h3>Step-by-step guide to Charts.js</h3>
        <div style={{ width: 500 }}>
          <canvas id="dimensions">

          </canvas>
        </div>
        <br />
        <div style={{ width: 800 }}>
          <canvas id="acquisitions">

          </canvas>
        </div>
      </header>
      <script type="module" src="dimensions.js"></script>
    </div>
  );
}

export default App;
