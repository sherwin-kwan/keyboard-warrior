
// This class doesn't do anything right now. Sherwin used it to test ES6 exports.

class arenaHelpers {
  static playerDamaged (hp)  {
    setPlayerHealth(prev => prev - hp);
  }
  static challengerDamaged (hp) {
    setChallengerHealth(prev => prev - hp);
  }
}
  
  export default arenaHelpers;