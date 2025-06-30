export interface TutorialStep {
  title: string;
  description: string;
  bgColor?: string;
  image?: string;
}

export interface CardProps {
  step: TutorialStep;
}
