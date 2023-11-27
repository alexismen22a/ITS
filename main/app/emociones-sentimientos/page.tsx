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
    tittle: "ESTOY FELIZ",
    img: "/assets/img/emociones/feliz.png",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/emociones/estoy_feliz.mp3",
  },
  {
    tittle: "ESTOY TRISTE",
    img: "/assets/img/emociones/triste.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/emociones/estoy_triste.mp3",
  },
  {
    tittle: "ESTOY ENOJADO",
    img: "/assets/img/emociones/enojado.png",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/emociones/estoy_enojado.mp3",
  },

  {
    tittle: "ESTOY ASUSTADO",
    img: "/assets/img/emociones/asustado.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/emociones/estoy_asustado.mp3",
  },
  {
    tittle: "ESTOY EMOCIONADO",
    img: "/assets/img/emociones/emocionado.avif",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/emociones/estoy_emocionado.mp3",
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
