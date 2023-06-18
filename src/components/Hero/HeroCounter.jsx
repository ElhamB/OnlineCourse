import React from "react";
import CountUp from "react-countup";
import style from "@/styles/Home.module.css";

const HeroCounter = ({ title, start, end, icon = "" }) => {
  return (
      <div className="col-3">
        <div className={style.counter}>
          <h3>
            <i className={"pi " + icon}></i>
            <CountUp start={start} end={end} duration={3} />
          </h3>
          <p>{title}</p>
        </div>
      </div>
  );
};

export default HeroCounter;
