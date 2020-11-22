// controls the player's state - health, words etc
// Makes an Axios request to words to load the player's words

// usePlayerAction hook

// if letter matches
// apply styles => look into useRef (initialize it in component not another hook or return it in useinputmatch hook, destructure in arena component
  // userRef example
    // const textInputRef = useRef(null)
    // return <span className="match" ref={textInputRef}></span>

    // access it by textInputRef.current.style.color = "red"

    // console.log(textInputRef.current) => log all the methods 
// apply styles using Interweave => https://github.com/milesj/interweave