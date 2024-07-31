import React from "react";
import { TheaterCard } from "./TheaterCard";
import { dummyData } from "../../data/dummyData";

export const TheaterList: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {dummyData.map((theater) => (
        <TheaterCard key={theater.id} theater={theater} />
      ))}
    </div>
  );
};
