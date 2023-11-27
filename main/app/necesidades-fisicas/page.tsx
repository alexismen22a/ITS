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
    tittle: "TENGO HAMBRE",
    img: "/assets/img/necesidades/tengo hambre.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/necesidades/tengo_hambre.mp3",
  },
  {
    tittle: "TENGO SED",
    img: "/assets/img/necesidades/tengo sed.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/necesidades/Tengo_Sed.mp3",
  },
  {
    tittle: "NECESITO IR AL BAÑO",
    img: "/assets/img/necesidades/bano.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/necesidades/bano.mp3",
  },

  {
    tittle: "ME SIENTO MAL",
    img: "/assets/img/necesidades/me siento mal.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/necesidades/Me_siento_mal.mp3",
  },

  {
    tittle: "NECESITO AYUDA",
    img: "/assets/img/necesidades/necesito ayuda.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/necesidades/Necesito_ayuda.mp3",
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
