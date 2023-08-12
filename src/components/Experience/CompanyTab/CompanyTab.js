import { useState } from "react";
import classes from "./CompanyTab.module.css";
import RoleResponsibilities from "./RoleResponsibilities/RoleResponsibilities";

export default function CompanyTab() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <>
      <div className={classes["company-roles"]}>
        <button
          className={
            activeContentIndex === 0
              ? `${classes["company-name-btn"]} ${classes["active"]}`
              : classes["company-name-btn"]
          }
          onClick={() => setActiveContentIndex(0)}
        >
          i4Sight
        </button>
        <button
          className={
            activeContentIndex === 1
              ? `${classes["company-name-btn"]} ${classes["active"]}`
              : classes["company-name-btn"]
          }
          onClick={() => setActiveContentIndex(1)}
        >
          Snapchat
        </button>
        <button
          className={
            activeContentIndex === 2
              ? `${classes["company-name-btn"]} ${classes["active"]}`
              : classes["company-name-btn"]
          }
          onClick={() => setActiveContentIndex(2)}
        >
          Hudson's Bay
        </button>
        <button
          className={
            activeContentIndex === 3
              ? `${classes["company-name-btn"]} ${classes["active"]}`
              : classes["company-name-btn"]
          }
          onClick={() => setActiveContentIndex(3)}
        >
          Target
        </button>
        <button
          className={
            activeContentIndex === 4
              ? `${classes["company-name-btn"]} ${classes["active"]}`
              : classes["company-name-btn"]
          }
          onClick={() => setActiveContentIndex(4)}
        >
          Flipkart
        </button>
      </div>
      <RoleResponsibilities index={activeContentIndex} />
    </>
  );
}
