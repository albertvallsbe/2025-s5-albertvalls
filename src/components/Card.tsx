import type { CardProps } from "../types/types";
import { Indicator } from "./Indicator";

export function Card({
  card,
  stepIndex,
  totalSteps,
  prevStep,
  nextStep,
  goToStep,
}: CardProps): JSX.Element {
  return (
    <div style={{ background: card.bgColor }}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      {card.image && <img src={card.image} alt={card.title} />}

      <div className="navigation">
        <button onClick={prevStep} aria-label="Anterior pas">
          ←
        </button>
        <Indicator
          totalSteps={totalSteps}
          currentStep={stepIndex}
          onSelect={goToStep}
        />
        <button onClick={nextStep} aria-label="Següent pas">
          →
        </button>
      </div>
    </div>
  );
}
