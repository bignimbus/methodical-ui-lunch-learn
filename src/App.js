import React, { useState } from 'react';
import pepper from './pepper.jpg';
import './App.css';

const App = () => {
  const [pets, addPet] = useState(0);

  return (
    <div className='container'>
      <div className='card'>
        <div className='card__image image'>
          <div className='image__container'>
            <img
              src={pepper}
              alt='Pepper'
              className='image__img'
            />
          </div>
        </div>
        <div className='card__content content'>
          <header className='content__header'>
            <h2 className='content__heading'>
              <span className='text text--copy text--lg'>
                Pepper
              </span>
            </h2>
          </header>
          <div>
            <p className='content__p'>
              <span className='text text--copy text--sm'>
                Pepper is a domestic shorthair.  This is funny because she has
                long hair in real life.  She enjoys being pet until she's done with
                that and bites me.  She also seems to like meetings, because she
                joins almost all of them.
              </span>
            </p>
          </div>
          <footer className='content__footer'>
            <div className='button'>
              <div className='button__container'>
                <button
                  type='button'
                  className='button__btn'
                  onClick={() => {
                    const newPets = pets + 1;
                    addPet(newPets);
                    alert(`Pepper successfully petted. Total pets: ${newPets}`);
                  }}
                >
                  <div className='button__content'>
                    <span className='text text--md'>
                      Pet Pepper
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
