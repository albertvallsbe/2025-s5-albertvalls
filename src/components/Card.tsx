import type { CardProps } from "../types/types";

export function Card({ step }: CardProps) {
  return (
    <div style={{ background: step.bgColor }}>
      <h2>{step.title}</h2>
      <p>{step.description}</p>
      {step.image && <img src={step.image} alt={step.title} />}
    </div>
  );
}
