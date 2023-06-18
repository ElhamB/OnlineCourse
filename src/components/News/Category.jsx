import Link from "next/link";
import React from "react";
import styles from "@/styles/News.module.css";

const Category = () => {
  return (
    <ul className={styles.category}>
      <li>
        <Link href={'/'} className="flex justify-content-between align-items-center mb-1">
          <span>طراحی سایت</span>
          <span>(12)</span>
        </Link>
      </li>
    </ul>
  );
};

export default Category;
