import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export class StepProgressBar extends React.Component { 
  render() {
    const regularNotch1 = "/images/one.png"
    const regularNotch2 = "/images/two.png"
    const regularNotch3 = "/images/three.png"
    const regularNotch4 = "/images/four.png"
    const regularNotch5 = "/images/five.png"
    const playerNotch = "https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
    const bossNotch = "/images/cave-dweller-worm.png"
    const playerLevel = parseInt(this.props.arenasBeaten) + 1
    return (
      <ProgressBar
        percent={parseInt(this.props.arenasBeaten) * 20}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={playerLevel === 1 ? playerNotch : regularNotch1}
              alt="Level 1"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={playerLevel === 2 ? playerNotch : regularNotch2}
              alt="Level 2"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={playerLevel === 3 ? playerNotch : regularNotch3}
              alt="Level 3"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={playerLevel === 4 ? playerNotch : regularNotch4}
              alt="Level 4"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={playerLevel === 5 ? playerNotch : regularNotch5}
              alt="Level 5"
            />
            </>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={playerLevel === 6 ? playerNotch : bossNotch}
              alt="Level 6"
            />
          )}
        </Step>
      </ProgressBar>
    );
  }
}