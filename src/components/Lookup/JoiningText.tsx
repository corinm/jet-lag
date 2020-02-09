import React from "react";

import styles from "./Lookup.module.scss";

const JoiningText: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.joiningText}>{text}</div>
);

export default JoiningText;
