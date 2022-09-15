import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import styles from "./OptionsBtn.module.scss";

export default function OptionsBtn() {
  function handleClick(e) {
    e.preventDefault();
    console.log("Options button clicked \n" + Object.entries(e).join("\n"));
  }

  return (
    <>
      <button className={styles.options} onClick={handleClick}>
        <Bars3Icon />
      </button>
    </>
  );
}
