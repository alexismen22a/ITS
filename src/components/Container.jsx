import React from "react";
import styles from '../styles/container.module.scss'

export default function Container({children}) {
    return(
        <div className={styles['main-container']}>
            {children}
        </div>
    )
}