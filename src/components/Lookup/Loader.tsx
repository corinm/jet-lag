import React from "react";
import { Spin } from "antd";

import styles from "./Lookup.module.scss";

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <Spin />
  </div>
);

export default Loader;
