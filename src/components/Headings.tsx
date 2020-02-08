import React from "react";
import { Row, Col } from "antd";

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
    <Row style={{ marginTop: 40, marginBottom: 40 }}>
      <Col span={4}></Col>
      <Col span={7}>
        <div style={{ textAlign: "right" }}>{departPlaceName}</div>
        <div style={{ textAlign: "right" }}>{departTimezoneName}</div>
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
