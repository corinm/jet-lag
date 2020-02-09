import React from "react";
import { Row, Col } from "antd";

import styles from "./Footer.module.scss";

const Copyright: React.FC = () => (
  <div className={styles.copyrightText}>Copyright © 2020 Corin Mulliss</div>
);

const IconAttribution: React.FC = () => (
  <div className={styles.iconText}>
    <span>Airplane icons made by </span>
    <a
      href="https://www.flaticon.com/authors/those-icons"
      title="Those Icons"
      className={styles.link}
    >
      Those Icons
    </a>
    <span> from </span>
    <a
      href="https://www.flaticon.com/"
      title="Flaticon"
      className={styles.link}
    >
      www.flaticon.com
    </a>
  </div>
);

const Footer: React.FC = () => {
  return (
    <Row>
      <Col span={2}></Col>
      <Col span={20}>
        <Copyright />
        <IconAttribution />
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default Footer;
