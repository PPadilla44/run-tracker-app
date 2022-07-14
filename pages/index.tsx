import type { NextPage } from "next";
import { useState } from "react";
import FirstInputPage from "../src/core/FirstInputPage";
import SecontStepPage from "../src/core/SecontStepPage";
import ThirdStepPage from "../src/core/ThirdStepPage";

export type PlanInput = {
  currentMilage: number;
  howManyDays: number;
  whatDays: number[];
  startDate: string;
  milageGoal: number;
  raceDate: string;
};

function getDateString(date: Date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

const Home: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [data, setData] = useState<PlanInput>({
    currentMilage: 0,
    howManyDays: 5,
    milageGoal: 13.1,
    raceDate: getDateString(new Date()),
    startDate: "",
    whatDays: [],
  });

  const updateCurrentMilage = (newMilage: string) => {
    setData((d) => ({
      ...d,
      currentMilage: parseInt(newMilage),
    }));
  };

  const updateCurrentDayCount = (newDayCount: string) => {
    setData((d) => ({
      ...d,
      howManyDays: parseInt(newDayCount),
    }));
  };

  const goToNext = () => {
    setActiveStep((d) => d + 1);
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2">
      {activeStep === 0 && (
        <FirstInputPage
          dayCount={data.howManyDays}
          currentMilage={data.currentMilage}
          updateCurrentDayCount={updateCurrentDayCount}
          updateCurrentMilage={updateCurrentMilage}
        />
      )}
      {activeStep === 1 && <SecontStepPage />}
      {activeStep === 2 && <ThirdStepPage />}

      <button className="bg-red-300" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Home;
