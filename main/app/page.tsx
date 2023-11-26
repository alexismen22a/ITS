import styles from "./page.module.css";
import { Grid } from "@src/components";
import { FC } from "react";

const buttonInfo = [
  {
    tittle: "Respuestas Básicas",
    img: "/assets/respuestas.png",
    url: "/respuestas-basicas",
    // music: "/assets/music.wav",
  },
  {
    tittle: "Necesidades Físicas",
    img: "/assets/Nececidades.jpg",
    url: "/necesidades-fisicas",
    // music: "/assets/music.wav",
  },
  {
    tittle: "Confort y Bienestar",
    img: "/assets/confort.png",
    url: "/confort-bienestar",
    // music: "/assets/music.wav",
  },
  {
    tittle: "Emociones y Sentimientos",
    img: "/assets/sentimientos.PNG",
    url: "/emociones-sentimientos",
    // music: "/assets/music.wav",
  },
  {
    tittle: "Solicitudes Cotidianas",
    img: "/assets/Solocitudes cot.png",
    url: "/solicitudes-cotidianas",
    // music: "/assets/music.wav",
  },
  {
    tittle: "Actividades",
    img: "/assets/actividades.jpg",
    url: "/actividades",
    // music: "/assets/music.wav",
  },
  {
    tittle: "Interacción Social",
    img: "/assets/interacion social.jpg",
    url: "/interaccion-social",
    // music: "/assets/music.wav",
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
