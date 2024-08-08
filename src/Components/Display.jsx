import { useState } from "react";
import styles from "./Display.module.css";

const Display = ({text})=> {
    
    return (
        <div className={`${styles["input"]}`}>
            <input className={`${styles["display"]}`} type="text" value={text} readOnly /></div>
    )
}
export default Display;