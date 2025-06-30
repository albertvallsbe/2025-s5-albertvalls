import type { CardProps } from "../types/types";

export const Card = ({ card, controls }: CardProps): JSX.Element => {
  const { stepIndex, totalSteps, isFirst, isLast, next, prev, goTo } = controls;
  const dots = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <article style={{ background: card.bgColor }}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      {card.image && <img src={card.image} alt={card.title} />}

      <div className="navigation">
        {!isFirst && <button onClick={prev}>←</button>}
        {dots.map((i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Pas ${i + 1}`}>
            {i === stepIndex ? "●" : "○"}
          </button>
        ))}
        {!isLast && <button onClick={next}>→</button>}
      </div>
    </article>
  );
};
