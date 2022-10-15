import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from 'src/components/Inputs/CustomImageChanger/CustomImageChanger.module.scss';
import { CapText } from 'src/utils/functions';

type CustomImageChangerProps = {
  className?: string;
  img: string;
  name: string;
};

export default function CustomImageChanger({
  className,
  img,
  name,
}: CustomImageChangerProps): JSX.Element {
  const { register } = useFormContext();

  return (
    <fieldset className={`${className ? className : ''} ${styles.fieldset}`}>
      <legend className={styles.legend}>{CapText('Change Image:')}</legend>
      <div className={styles.division}></div>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgCover}
          src={window.location.origin + '/gallery/gallery.png'}
          alt="Error"
          title={img}
        />
        <img
          className={styles.img}
          src={window.location.origin + '/gallery/' + img}
          alt="Error"
          title={img}
        />
      </div>
      <div className={`${styles.radioInputs} ${styles.firstChild}`}>
        <input
          className={styles.hidden}
          type="radio"
          {...register(name)}
          id="selectGallery"
          value="gallery"
        />
        <label htmlFor="selectGallery">{CapText('Select from Gallery')}</label>
      </div>
      <div className={`${styles.radioInputs} ${styles.secondChild}`}>
        <input
          className={styles.hidden}
          type="radio"
          {...register(name)}
          id="selectDevice"
          value="device"
        />
        <label htmlFor="selectDevice">{CapText('Select from device')}</label>
      </div>
      <div className={styles.deleteImage}>
        <input
          className={styles.hidden}
          type="radio"
          {...register(name)}
          id="selectRandom"
          value="random"
        />
        <label htmlFor="selectRandom">{CapText('remove Image')}</label>
      </div>
    </fieldset>
  );
}
