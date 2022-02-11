import React from "react";
import styles from "./styles/CSSModule.module.css";

function CSSModule() {
  return (
    <div className={styles.wrapper}>
      안녕하세요 저는 <span className="something">CSS Module!!</span>
    </div>
  );
}

export default CSSModule;