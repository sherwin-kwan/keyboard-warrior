
// This class doesn't do anything right now. Sherwin used it to test ES6 exports.

class arenaHelpers {
  static playerDamaged (hp)  {
    console.log("PLAYER DAMAGED!", hp);
    setPlayerHealth(prev => prev - hp);
  }
  static challengerDamaged (hp) {
    console.log("CHALLENGER DAMAGED!", hp);
    setChallengerHealth(prev => prev - hp);
  }
}
  
  export default arenaHelpers;