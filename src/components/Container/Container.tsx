import React from 'react';

import styles from './Container.module.scss';

interface ContainerProps {
  children: JSX.Element | Array<JSX.Element>;
}

export default function Container({ children }: ContainerProps) {
  return <div className={styles.mainContainer}>{children}</div>;
}
