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
    tittle: "QUIERO LEER",
    img: "/assets/img/actividades/quiero leer.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/actividades/Quiero_leer.mp3",
  },
  {
    tittle: "QUIERO VER TELEVISION",
    img: "/assets/img/actividades/quiero ver la tv.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/actividades/Quiero_ver_la_tv.mp3",
  },
  {
    tittle: "QUIERO ESCUCHAR MUSICA",
    img: "/assets/img/actividades/escuchar musica.avif",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/actividades/Quiero_escuchar_musica.mp3",
  },
  {
    tittle: "QUIERO SALIR",
    img: "/assets/img/actividades/quiero salir.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/actividades/quiero_salir.mp3",
  },
  {
    tittle: "QUIERO JUGAR",
    img: "/assets/img/actividades/quiero jugar.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/actividades/quiero_jugar.mp3",
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
