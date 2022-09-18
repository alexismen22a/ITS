import React, { useState } from 'react';

import styles from './AudioBtn.module.scss';

interface Props {
  children?: JSX.Element | Array<JSX.Element>;
  imgUrl: string;
  alt?: string;
}

export default function AudioBtn({ children, imgUrl, alt }: Props) {
  let [buttonError, setButtonsError] = useState(false);

  return (
    <button className={styles.audioButton} disabled={buttonError}>
      {!buttonError ? (
        <>
          <img
            src={window.location.origin + '/galery/' + imgUrl}
            alt={alt ?? imgUrl}
            className={styles.btnImage}
            onError={() => setButtonsError(true)}
          />
          {children && children}
        </>
      ) : (
        'Fatal Error'
      )}
    </button>
  );
}
