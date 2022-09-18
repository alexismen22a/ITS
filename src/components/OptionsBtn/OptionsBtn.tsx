import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

import styles from 'src/components/OptionsBtn/OptionsBtn.module.scss';

export default function OptionsBtn() {
  function toggleOptions(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log('Options button clicked \n' + Object.entries(e).join('\n'));
  }

  return (
    <button className={styles.options} onClick={toggleOptions}>
      <Bars3Icon />
    </button>
  );
}
