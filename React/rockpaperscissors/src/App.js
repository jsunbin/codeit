import HandButton from "./components/HandButton";
import HandIcon from "./components/HandIcon";
import Button from "./components/Button";
import { useState } from "react";
import { compareHand, generateRandomHand } from './utils';

function App() {

  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("rock");

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand()
    setHand(nextHand);
    setOtherHand(nextOtherHand);

  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
  };

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
        <p>{getResult(hand, otherHand)}</p>
        <div>
          <HandIcon value={hand} />
          VS
          <HandIcon value={otherHand} />
        </div>
      </div>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
export default App;
