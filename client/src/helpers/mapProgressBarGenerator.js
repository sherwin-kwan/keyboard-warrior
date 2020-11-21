export function mapProgressBarGenerator(numLevelsCompleted) {
  numLevelsToBoss = 5;
  for (let i = 0; i < numLevelsToBoss; i++) {
    if (i === numLevelsCompleted) {
      <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
              alt="Level 2"
            />
          )}
        </Step>
    } else {
      <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/yellow-dot.png"
              alt="Level {i}"
            />
          )}
        </Step>
    }
  }
};