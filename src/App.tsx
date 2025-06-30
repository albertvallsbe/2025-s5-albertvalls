import { useState } from "react";
import type { TutorialStep } from "./types/types";
import dataCards from "./data/dataCards.json";
import { Card } from "./components/Card";
import "./App.css";

function App(): JSX.Element {
  const tutorialData: TutorialStep[] = dataCards;
  const [step, setStep] = useState<number>(0);

  const prevStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));
  const nextStep = () => {
    setStep((prev) => (prev < tutorialData.length - 1 ? prev + 1 : prev));
  };
  const goToStep = (index: number) =>
    setStep(() => Math.min(Math.max(index, 0), tutorialData.length - 1));

  return (
    <>
      <h1>ITA s5</h1>
      <Card
        card={tutorialData[step]}
        stepIndex={step}
        totalSteps={tutorialData.length}
        prevStep={step > 0 ? prevStep : undefined}
        nextStep={step < tutorialData.length - 1 ? nextStep : undefined}
        goToStep={goToStep}
      />
    </>
  );
}

export default App;
