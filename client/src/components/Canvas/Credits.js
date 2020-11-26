import React from 'react';

function Credits(props) {
  return (
    <main className="credits">
      <h1>Thanks for playing!</h1>
      <h3>Credits:</h3> 
      <h4>Game Design, Programming, and Styling</h4>
      <div className="credit">
        <span>Helen Ouyang</span>
        <a href="https://github.com/helenohyeah" target="_blank">
          <img className="logo" src="/images/github-logo.png" />
        </a>
        <a href="https://www.linkedin.com/in/helenouyang/" target="_blank">
          <img className="logo" src="/images/linkedin-logo.png" />
        </a>
        <img className="portrait" src="/images/helen.png" alt="Helen" />
      </div>
      <div className="credit">
        <img src="/images/jillian.png" alt="Jillian" />
        <span>Jillian Martin</span>
        <a href="https://github.com/jilliankmartin" target="_blank">
          <img className="logo" src="/images/github-logo.png" />
        </a>
        <a href="https://www.linkedin.com/in/jilliankmartin/" target="_blank">
          <img className="logo" src="/images/linkedin-logo.png" />
        </a>
        <img className="portrait" src="/images/helen.png" alt="Helen" />
      </div>
      <div className="credit">
        <span>Sherwin Kwan</span>
        <a href="https://github.com/sherwin-kwan" target="_blank">
          <img className="logo" src="/images/github-logo.png" />
        </a>
        <a href="https://www.linkedin.com/in/sherwinkwan/" target="_blank">
          <img className="logo" src="/images/linkedin-logo.png" />
        </a>
        <img className="portrait" src="/images/helen.png" alt="Helen" />
        <img src="/images/sherwin.png" alt="Sherwin" />
      </div>
      <h4>Additional Attribution for sound and assets??</h4>
      <button
        className="primary"
        onClick={() => props.setMode("START")}
      >
        Back
      </button>
    </main>
  );
}

export default Credits;