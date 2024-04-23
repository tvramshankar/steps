import { useState } from "react";
import "./App.css";
import { messages } from "./data";
function App() {
  const [stage, setStage] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (stage > 1) setStage(stage - 1);
  }
  function handleNext() {
    if (stage < 3) setStage(stage + 1);
  }
  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={stage >= 1 ? "active" : ""}>1</div>
            <div className={stage >= 2 ? "active" : ""}>2</div>
            <div className={stage >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {stage}: {messages[stage - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
