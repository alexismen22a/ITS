import React, { useState } from "react";

import styles from "./AudioBtn.module.scss";

export default function AudioBtn({ children, imgUrl }) {
  let [buttonError, setButtonsError] = useState(false);

  return (
    <button className={styles.audioButton} disabled={buttonError}>
      {!buttonError ? (
        <>
          <img
            src={window.location.origin + imgUrl}
            alt=""
            className={styles.btnImage}
            onError={() => setButtonsError(true)}
          />
          {children}
        </>
      ) : (
        "Fatal Error"
      )}
    </button>
  );
}
