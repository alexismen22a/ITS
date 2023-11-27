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
    tittle: "QUIERO VESTIRME",
    img: "/assets/img/solicitudes/quiero vestirme.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/solicitudes/quiero_vestirme.mp3",
  },
  {
    tittle: "NECESITO CAMBIO DE ROPA",
    img: "/assets/img/solicitudes/cambio de ropa.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/solicitudes/necesito_un_cambio_de_ropa.mp3",
  },
  {
    tittle: "QUIERO BAÑARME",
    img: "/assets/img/solicitudes/necesito banarme.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/solicitudes/quiero_banarme.mp3",
  },
  {
    tittle: "NECESITO MIS MEDICAMENTOS",
    img: "/assets/img/solicitudes/medicamentos.avif",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/solicitudes/medicamentos.mp3",
  },
  {
    tittle: "QUIERO DESCANSAR",
    img: "/assets/img/solicitudes/quiero descansar.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/solicitudes/Quiero_Descansar.mp3",
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
