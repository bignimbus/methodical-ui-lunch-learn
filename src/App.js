import React from 'react';
import pepper from './pepper.jpg';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img
              src={pepper}
              alt='Pepper'
            />
          </div>
        </div>
        <div>
          <header>
            <h2>
              <span>
                Pepper
              </span>
            </h2>
          </header>
          <div>
            <p>
              <span>
                Pepper is a domestic shorthair.  This is funny because she has
                long hair in real life.  She enjoys being pet until she's done with
                that and bites me.  She also seems to like meetings, because she
                joins almost all of them.
              </span>
            </p>
          </div>
          <footer>
            <div>
              <div>
                <button
                  type='button'
                >
                  <div>
                    <span>
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
