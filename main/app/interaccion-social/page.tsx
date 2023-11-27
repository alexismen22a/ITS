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
    tittle: "QUIERO HABLAR CON ALGUIEN",
    img: "/assets/img/interacion/necesito hablar.jpeg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/interacion/quiero_hablar.mp3",
  },
  {
    tittle: "NECESITO ESPACIO",
    img: "/assets/img/interacion/necesito espacio.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/interacion/Necesito_espacio.mp3",
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
