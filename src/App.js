import React from 'react';
import pepper from './pepper.jpg';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <section>
          <div>
            <img
              src={pepper}
              alt='Pepper'
            />
          </div>
        </section>
        <section>
          <header>
            <h2>
              <span>
                Pepper
              </span>
            </h2>
          </header>
          <section>
            <p>
              <span>
                Pepper is a domestic shorthair.  This is funny because she has
                long hair in real life.  She enjoys being pet until she's done with
                that and bites me.  She also seems to like meetings, because she
                joins almost all of them.
              </span>
            </p>
          </section>
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
        </section>
      </div>
    </div>
  );
};

export default App;
