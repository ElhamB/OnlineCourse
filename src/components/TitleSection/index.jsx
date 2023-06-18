import React from "react";
import styles from "@/styles/Home.module.css";

const TitleSection = ({ title, className }) => {
  return (
    <div className="grid">
      <div className="col-12 text-center">
          <h2 className={`${className} ${styles.titleSection}`}>
            <span>{title}</span>
          </h2>
      </div>
    </div>
  );
};

export default TitleSection;
