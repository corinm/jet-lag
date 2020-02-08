import React, { useState } from "react";
import { Row, Col } from "antd";
import { Moment } from "moment";

import { Place, TimezoneData } from "../types";
import { useFetchTimezone } from "../hooks";

const Results: React.FC<{
  departPlace: Place;
  departDate: Moment | null | undefined;
  departTime: Moment | null | undefined;
}> = ({ departPlace, departDate, departTime }) => {
  const [timezone, setTimezone] = useState<TimezoneData>();

  useFetchTimezone(departPlace, departDate, departTime, setTimezone);

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={8}>
        <div>{departPlace?.name}</div>
        <div>{timezone?.timeZoneName}</div>
      </Col>
      <Col span={8}>
        <div></div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Results;
