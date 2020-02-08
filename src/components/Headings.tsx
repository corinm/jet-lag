import React from "react";
import { Row, Col } from "antd";

import styles from "./Headings.module.css";

const Headings: React.FC<{
  departPlaceName: string;
  departTimezoneName: string;
  arrivePlaceName: string;
  arriveTimezoneName: string;
}> = ({
  departPlaceName,
  departTimezoneName,
  arrivePlaceName,
  arriveTimezoneName
}) => {
  return (
    <Row className={styles.row}>
      <Col span={4}></Col>
      <Col span={7}>
        <div className={styles.textRight}>{departPlaceName}</div>
        <div className={styles.textRight}>{departTimezoneName}</div>
      </Col>
      <Col span={2}></Col>
      <Col span={7}>
        <div>{arrivePlaceName}</div>
        <div>{arriveTimezoneName}</div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Headings;
