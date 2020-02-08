import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import { Place, TimezoneData } from "../types";
import { fetchTimezone } from "../services/timezones";

const Results: React.FC<{ departPlace: Place; arrivePlace: Place }> = ({
  departPlace,
  arrivePlace
}) => {
  const [timezone, setTimezone] = useState<TimezoneData>();

  useEffect(() => {
    async function fetch() {
      try {
        const timezone = await fetchTimezone(departPlace.id);
        setTimezone(timezone);
      } catch (e) {
        console.error(e);
      }
    }

    if (departPlace) {
      fetch();
    }
  }, [departPlace]);

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={8}>
        <div>{departPlace ? departPlace.name : ""}</div>
        <div>{timezone?.timeZoneName}</div>
      </Col>
      <Col span={8}>
        <div>{arrivePlace ? arrivePlace.name : ""}</div>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Results;
