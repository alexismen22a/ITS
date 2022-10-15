import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

import { useAppDispatch } from 'src/hooks/redux';
import styles from 'src/components/Options/Options.module.scss';
import { toggleOptions } from 'src/components/Options/OptionsSlice';

export default function OptionsBtn() {
  const dispatch = useAppDispatch();

  return (
    <button className={styles.options} onClick={() => dispatch(toggleOptions())}>
      <Bars3Icon />
    </button>
  );
}
