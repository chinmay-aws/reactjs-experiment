/**
 * @copyright: Chinmay
 */
import React from 'react';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="container-fkuid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Contacts</a>
        </div>
      </nav>
      <div className="row">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
