import React from "react";
import { Row, Col } from "antd";

import styles from "./Copyright.module.css";

const Copyright: React.FC = () => {
  return (
    <Row>
      <Col span={2}></Col>
      <Col span={20} className={styles.copyright}>
        Copyright © 2020 Corin Mulliss
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default Copyright;
