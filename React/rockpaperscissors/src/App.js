import HandButton from "./components/HandButton";
import HandIcon from "./components/HandIcon";
import Button from "./components/Button";
import { useState } from "react";
import { compareHand, generateRandomHand } from './utils';

function App() {
  const INITIAL_VALUE = "rock";
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistrotyItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistrotyItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(score + bet);

  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (event) => {
    let num = Number(event.target.value);
    if (num > 9) num = 9;
    if (num < 1) num = 1;
    num = Math.floor(num)
    setBet(num);
  }

  function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '승리';
    if (comparison < 0) return '패배';
    return '무승부';
  }

  return (
    <div>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
        <div>
          {score} : {otherScore}
        </div>
        <p>{getResult(hand, otherHand)}</p>
        <div>
          <HandIcon value={hand} />
          VS
          <HandIcon value={otherHand} />
        </div>
        <div>
          <input type={"number"} value={bet} min={1} max={9} onChange={handleBetChange}></input>
        </div>
        <p>승부 기록: {gameHistory.join(', ')}</p>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
export default App;
