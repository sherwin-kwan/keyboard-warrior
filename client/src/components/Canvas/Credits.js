import React from 'react';

import "./Credits.scss";

function Credits(props) {
  return (
    <main className="credits">
      <div className="credits">
        <h1>Thanks for playing!</h1>
        <h2>Credits:</h2> 
        <h3>Game Design, Programming & Styling</h3>
        <div className="credits-container">
          <div className="credit">
            <h4>Helen Ouyang</h4>
            <div className="logos">
              <a href="https://github.com/helenohyeah" rel="noopener noreferrer" target="_blank">
                <img className="logo" alt="Github" title="Github" src="/images/github-logo.png" />
              </a>
              <a href="https://www.linkedin.com/in/helenouyang/" rel="noopener noreferrer" target="_blank">
                <img className="logo" alt="LinkedIn" title="LinkedIn" src="/images/linkedin-logo.png" />
              </a>
            </div>
            <img className="portrait" src="/images/helen.png" alt="Helen" />
          </div>
          <div className="credit">
            <img className="portrait" src="/images/jillian.png" alt="Jillian" />
            <h4>Jillian Martin</h4>
            <div className="logos">
              <a href="https://github.com/jilliankmartin" rel="noopener noreferrer" target="_blank">
                <img className="logo" alt="Github" title="Github" src="/images/github-logo.png" />
              </a>
              <a href="https://www.linkedin.com/in/jilliankmartin/" rel="noopener noreferrer" target="_blank">
                <img className="logo" alt="Linkedin" title="LinkedIn" src="/images/linkedin-logo.png" />
              </a>
            </div>
          </div>
          <div className="credit">
            <h4>Sherwin Kwan</h4>
            <div className="logos">
              <a href="https://github.com/sherwin-kwan" rel="noopener noreferrer" target="_blank">
                <img className="logo" alt="Github" title="Github" src="/images/github-logo.png" />
              </a>
              <a href="https://www.linkedin.com/in/sherwinkwan/" rel="noopener noreferrer" target="_blank">
                <img className="logo" alt="Linkedin" title="LinkedIn" src="/images/linkedin-logo.png" />
              </a>
            </div>
            <img className="portrait" src="/images/sherwin.png" alt="Sherwin" />
          </div>
        </div>
        <p>Special thanks to Travis Borsa, Andy Lindsay, Brian Chang, James Cash, Dmitry Besson, John Lee, Rob Schwitzer, Afshan Khatoon, and our friends and family for putting up with us being AWOL while we built this game.</p>
        <button
          className="primary"
          onClick={() => props.setMode("START")}
        >
          Back to Start
        </button>
        
        <p className="footnotes">(C) 2020 Helen Ouyang, Jillian Martin, and Sherwin Kwan. <br />
        Keyboard Warrior is free and open-source software. <a href="https://github.com/sherwin-kwan/word-game/" target="_blank">See source repo</a>. <br />
        We welcome collaboration! If you spot a bug, feel free to report it <a href="https://github.com/sherwin-kwan/word-game/issues">here! </a><br />
        (Or if you're feeling really hard core, fix the code and send us a pull request!)</p>
        
      </div>
    </main>
  );
}

export default Credits;
