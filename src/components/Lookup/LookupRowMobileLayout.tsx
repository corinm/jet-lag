import React from "react";
import { Row, Col } from "antd";

import styles from "./Lookup.module.scss";

const LookupRowMobileLayout: React.FC<{
  text1: any;
  select1: any;
  text2: any;
  select2: any;
  text3: any;
  select3: any;
  isMobile: boolean;
}> = ({ text1, select1, text2, select2, text3, select3, isMobile }) => {
  if (isMobile) {
    return (
      <Row className={styles.lookupRow}>
        <Row className={styles.lookupMobileRow}>
          <Col span={6}>{text1}</Col>
          <Col span={18}>{select1}</Col>
        </Row>
        <Row className={styles.lookupMobileRow}>
          <Col span={6}>{text2}</Col>
          <Col span={18}>{select2}</Col>
        </Row>
        <Row className={styles.lookupMobileRow}>
          <Col span={6}>{text3}</Col>
          <Col span={18}>{select3}</Col>
        </Row>
      </Row>
    );
  } else {
    return (
      <Row className={styles.lookupRow}>
        <Col span={2}>{text1}</Col>
        <Col span={8}>{select1}</Col>
        <Col span={1}>{text2}</Col>
        <Col span={6}>{select2}</Col>
        <Col span={1}>{text3}</Col>
        <Col span={6}>{select3}</Col>
      </Row>
    );
  }
};

export default LookupRowMobileLayout;
