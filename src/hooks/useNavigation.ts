import { useState } from "react";
import type { TutorialStep, NavigationControls } from "../types/types";

export const useNavigation = (steps: TutorialStep[]): NavigationControls => {
  const [stepIndex, setStepIndex] = useState<number>(0);

  const totalSteps = steps.length;
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === totalSteps - 1;
  const currentStep = steps[stepIndex];

  const next = (): void => {
    if (!isLast) setStepIndex((i) => i + 1);
  };

  const prev = (): void => {
    if (!isFirst) setStepIndex((i) => i - 1);
  };

  const goTo = (index: number): void => {
    if (index >= 0 && index < totalSteps) setStepIndex(index);
  };

  return {
    stepIndex,
    currentStep,
    totalSteps,
    isFirst,
    isLast,
    next,
    prev,
    goTo,
  };
};
