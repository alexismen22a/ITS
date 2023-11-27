import styles from "../page.module.css";
import { Grid } from "@src/components";
import { FC } from "react";

const buttonInfo = [
  {
    tittle: "ATRAS",
    img: "/assets/img/atras.png",
     url: "/",
    //audio: "/assets/Si.mp3",
  },
  {
    tittle: "SI",
    img: "/assets/img/respuestas/si.png",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/Si.mp3",
  },
  {
    tittle: "NO",
    img: "/assets/img/respuestas/NO.png",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/No.mp3",
  },
  {
    tittle: "TAL VEZ",
    img: "/assets/img/respuestas/Tal-vez.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/Talvez.mp3",
  },
  {
    tittle: "NO SE",
    img: "/assets/img/respuestas/nose.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/nose.mp3",
  },
  {
    tittle: "GRACIAS",
    img: "/assets/img/respuestas/gracias.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/Gracias.mp3",
  },
  
  {
    tittle: "POR FAVOR",
    img: "/assets/img/respuestas/porfavor.png",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/Porfavor.mp3",
  },

  {
    tittle: "LO SIENTO",
    img: "/assets/img/respuestas/lo siento.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/respuestas/lo_siento.mp3",
  },

];

const Home: FC<{}> = () => {
  return (
    <main className={styles.main}>
      <Grid items={buttonInfo} />
    </main>
  );
};

export default Home;
