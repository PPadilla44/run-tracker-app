import React from "react";
import { PlanInput } from "../../../pages";

interface FirstInputPageProps {
  dayCount: number;
  currentMilage: number;
  updateCurrentDayCount: (count: string) => void;
  updateCurrentMilage: (miles: string) => void;
}

const FirstInputPage: React.FC<FirstInputPageProps> = ({
  dayCount,
  currentMilage,
  updateCurrentDayCount,
  updateCurrentMilage,
}) => {
  return (
    <div>
      <div>
        <h1>Current Milage Per Week</h1>
        <input
          type="number"
          className="bg-gray-200 w-full"
          min={0}
          max={50}
          value={currentMilage}
          onChange={(e) => updateCurrentMilage(e.target.value)}
        />
      </div>
      <div>
        <h1>How many days do you want to run?</h1>
        <select
          className="w-full"
          onChange={(e) => updateCurrentDayCount(e.target.value)}
          value={dayCount}
        >
          <option value={3}>3 days</option>
          <option value={4}>4 days</option>
          <option value={5}>5 days</option>
          <option value={6}>6 days</option>
        </select>
      </div>
    </div>
  );
};

export default FirstInputPage;
