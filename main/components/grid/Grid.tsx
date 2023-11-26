import { FC, PropsWithChildren } from "react";
import styles from "./grid.module.css";
import { default as MuiGrid } from "@mui/material/Grid";
import { Button } from "@src/components";

interface item {
  tittle: string;
  img: string;
  url?: string;
  audio?: string;
}

interface GridProps {
  spacing?: number;
  items: item[];
}

const Grid: FC<GridProps> = ({ spacing = 2, items }) => {
  return (
    <MuiGrid container spacing={spacing} className={styles.grid}>
      {items.map((item) => (
        <Button key={item.tittle} {...item} />
      ))}
    </MuiGrid>
  );
};

export default Grid;
