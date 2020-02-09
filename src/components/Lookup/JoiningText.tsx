import React from "react";
import { Col } from "antd";

import styles from "./Lookup.module.css";

const JoiningText: React.FC<{ span: number; text: string }> = ({
  span,
  text
}) => (
  <Col span={span} className={styles.joiningText}>
    {text}
  </Col>
);

export default JoiningText;
