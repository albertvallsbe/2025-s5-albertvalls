export type TutorialStep = {
  title: string;
  description: string;
  bgColor?: string;
  image?: string;
};

export type CardProps = {
  card: TutorialStep;
  stepIndex: number;
  totalSteps: number;
  prevStep?: () => void;
  nextStep?: () => void;
  goToStep: (index: number) => void;
};

export type IndicatorProps = {
  totalSteps: number;
  currentStep: number;
  onSelect: (index: number) => void;
};
