import React from 'react';

import "./Credits.scss";

function Credits(props) {
  return (
    <main className="credits">
      <h1>Thanks for playing!</h1>
      <h2>Credits:</h2> 
      <h3>Game Design, Programming & Styling</h3>
      <div className="credits-container">
        <div className="credit">
          <h4>Helen Ouyang</h4>
          <div className="logos">
            <a href="https://github.com/helenohyeah" target="_blank">
              <img className="logo" src="/images/github-logo.png" />
            </a>
            <a href="https://www.linkedin.com/in/helenouyang/" target="_blank">
              <img className="logo" src="/images/linkedin-logo.png" />
            </a>
          </div>
          <img className="portrait" src="/images/helen.png" alt="Helen" />
        </div>
        <div className="credit-reverse">
          <img className="portrait" src="/images/jillian.png" alt="Jillian" />
          <h4>Jillian Martin</h4>
          <div className="logos">
            <a href="https://github.com/jilliankmartin" target="_blank">
              <img className="logo" src="/images/github-logo.png" />
            </a>
            <a href="https://www.linkedin.com/in/jilliankmartin/" target="_blank">
              <img className="logo" src="/images/linkedin-logo.png" />
            </a>
          </div>
        </div>
        <div className="credit">
          <h4>Sherwin Kwan</h4>
          <div className="logos">
            <a href="https://github.com/sherwin-kwan" target="_blank">
              <img className="logo" src="/images/github-logo.png" />
            </a>
            <a href="https://www.linkedin.com/in/sherwinkwan/" target="_blank">
              <img className="logo" src="/images/linkedin-logo.png" />
            </a>
          </div>
          <img className="portrait" src="/images/sherwin.png" alt="Sherwin" />
        </div>
      </div>
      <h4>Additional Attribution for sound and assets??</h4>
      <button
        className="primary"
        onClick={() => props.setMode("START")}
      >
        Back to Start
      </button>
    </main>
  );
}

export default Credits;