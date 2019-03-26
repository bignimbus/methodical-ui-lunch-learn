import React from 'react';
import pepper from './pepper.jpg';
import './App.css';

const App = () => {
  return (
    <div>
      <img
        src={pepper}
        alt='Pepper'
      />
      <h2>
        Pepper
      </h2>
      <p>
        Pepper is a domestic shorthair.  This is funny because she has
        long hair in real life.  She enjoys being pet until she's done with
        that and bites me.  She also seems to like meetings, because she
        joins almost all of them.
      </p>
      <button
        type='button'
      >
        Pet Pepper
      </button>
    </div>
  );
};

export default App;
