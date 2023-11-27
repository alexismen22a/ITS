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
    tittle: "TENGO FRIO",
    img: "/assets/img/confort/tengo frio.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/confort/tengo_frio.mp3",
  },
  {
    tittle: "TENGO CALOR",
    img: "/assets/img/confort/tengo calor.webp",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/confort/tengo_calor.mp3",
  },
  {
    tittle: "ME DUELE",
    img: "/assets/img/confort/me duele.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/confort/me_duele.mp3",
  },
  {
    tittle: "ESTOY CANSADO",
    img: "/assets/img/confort/cansado.jpg",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/confort/estoy_cansado.mp3",
  },

  {
    tittle: "ESTOY COMODO",
    img: "/assets/img/confort/estoy comodo.webp",
    //url: "/necesidades-fisicas",
     audio: "/assets/Audio/confort/estoy_comodo.mp3",
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
