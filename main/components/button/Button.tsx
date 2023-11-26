"use client";

import Image from "next/image";
import Grid from "@mui/material/Grid";
import styles from "./button.module.css";
import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  tittle: string;
  img: string;
  url?: string;
  audio?: string;
}

const Button: FC<ButtonProps> = ({ tittle, img, url, audio }) => {
  if ((url && audio) || (!url && !audio)) return "Error displaying Buttons";
  const audioFile = new Audio(audio);

  const playAudio = () => {
    audioFile.play();
  };

  const SoundOrLink = url ? (
    <Link href={url} className={styles.container}>
      <Image src={img} alt={tittle} fill className={styles.img} />
      <div className={styles.overlay}></div>
      <div className={styles.tittle}>{tittle}</div>
    </Link>
  ) : (
    <div onClick={playAudio} className={styles.container}>
      <Image src={img} alt={tittle} fill className={styles.img} />
      <div className={styles.overlay}></div>
      <div className={styles.tittle}>{tittle}</div>
    </div>
  );

  return (
    <Grid item xs={4} className={styles.item}>
      {SoundOrLink}
    </Grid>
  );
};

export default Button;
