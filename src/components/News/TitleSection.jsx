import React from 'react'
import styles from "@/styles/News.module.css";

const TitleSection = ({title}) => {
  return (
    <>
      <h3 className="mt-3 mb-2">{title}</h3>
      <div className={styles.headdingBorder}></div>
    </>
  )
}

export default TitleSection
