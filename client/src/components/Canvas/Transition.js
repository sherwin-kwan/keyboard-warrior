import React, { useEffect, useState } from 'react';
import "./Transition.scss";

function Transition(props) {

  const [message, setMessage] = useState('');

  useEffect(() => {
    const patienceTimeout = setTimeout(() => {
      setMessage(props.message || "Please be patient while the next screen loads");
    }, 1000);
    return () => clearTimeout(patienceTimeout);
  }, []);

  return (
    <main className="transition">
      <img src="/images/status.png" alt="Loading" />
      {/* Displays after 1 second */}
      <p>{message}</p>
    </main>
  );
}

export default Transition;