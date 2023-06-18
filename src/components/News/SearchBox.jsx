import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "@/styles/News.module.css";

const SearchBox = () => {
  return (
    <div className={styles.searchContainer}>
      <InputText placeholder="جستجو..." />
      <Button className={styles.buttonSearch}>
        <i className="pi pi-search"></i>
      </Button>
    </div>
  );
};

export default SearchBox;
