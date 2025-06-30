import React, { useState } from "react";
import type { TutorialStep } from "./types/types";
import dataCards from "./data/dataCards.json";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const tutorialData: TutorialStep[] = dataCards;

  const [stepIndex, setStepIndex] = useState<number>(0);
  const currentStep: TutorialStep = tutorialData[stepIndex];

  return (
    <>
      <h1>ITA s5</h1>
      <Card step={currentStep} />
      <div className="navigation">
        {stepIndex > 0 && (
          <button onClick={() => setStepIndex(stepIndex - 1)}>←</button>
        )}

        {stepIndex < tutorialData.length - 1 && (
          <button onClick={() => setStepIndex(stepIndex + 1)}>→</button>
        )}
      </div>
    </>
  );
}

export default App;
