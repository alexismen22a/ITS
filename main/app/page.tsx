import styles from "./page.module.css";
import { Grid } from "@src/components";
import { FC } from "react";

const buttonInfo = [
  {
    tittle: "Respuestas Básicas",
    img: "/assets/respuestas.png",
    // url: "/respuestas-basicas",
    audio: "/assets/music.wav",
  },
  {
    tittle: "Necesidades Físicas",
    img: "/assets/Nececidades.jpg",
    url: "/necesidades-fisicas",
    // audio: "/assets/music.wav",
  },
  {
    tittle: "Confort y Bienestar",
    img: "/assets/confort.png",
    url: "/confort-bienestar",
    // audio: "/assets/music.wav",
  },
  {
    tittle: "Emociones y Sentimientos",
    img: "/assets/sentimientos.PNG",
    url: "/emociones-sentimientos",
    // audio: "/assets/music.wav",
  },
  {
    tittle: "Solicitudes Cotidianas",
    img: "/assets/Solocitudes cot.png",
    url: "/solicitudes-cotidianas",
    // audio: "/assets/music.wav",
  },
  {
    tittle: "Actividades",
    img: "/assets/actividades.jpg",
    url: "/actividades",
    // audio: "/assets/music.wav",
  },
  {
    tittle: "Interacción Social",
    img: "/assets/interacion social.jpg",
    url: "/interaccion-social",
    // audio: "/assets/music.wav",
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
