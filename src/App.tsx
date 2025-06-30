import type { TutorialStep } from "./types/types";
import dataCards from "./data/dataCards.json";
import { Card } from "./components/Card";
import { useNavigation } from "./hooks/useNavigation";
import "./App.css";

const App = (): JSX.Element => {
  const tutorialData: TutorialStep[] = dataCards;
  const controls = useNavigation(tutorialData);

  return (
    <>
      <h1>ITA s5</h1>
      <Card card={controls.currentStep} controls={controls} />
    </>
  );
};

export default App;
