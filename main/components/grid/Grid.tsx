import { FC, PropsWithChildren } from "react";
import styles from "./grid.module.css";
import { default as MuiGrid } from "@mui/material/Grid";
import { Button } from "@src/components";

interface item {
  tittle: string;
  url: string;
  img: string;
}

interface GridProps {
  spacing?: number;
  items: item[];
}

const Grid: FC<GridProps> = ({ spacing = 2, items }) => {
  return (
    <MuiGrid container spacing={spacing} className={styles.grid}>
      {items.map(({ tittle, url, img }) => (
        <Button tittle={tittle} url={url} img={img} key={tittle} />
      ))}
    </MuiGrid>
  );
};

export default Grid;
