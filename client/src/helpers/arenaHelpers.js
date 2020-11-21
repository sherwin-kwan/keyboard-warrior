
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