"use client"
import "./stats.css";

const Stats = ({ number, description }) => {
  return (
    <div className="statisticsRight">
      <h1>{number}</h1>
      <p> {description}</p>
    </div>
  );
};

export default Stats;
