import React, { useState } from "react";
import { Row, Col } from "antd";
import { Moment } from "moment";

import Timeline from "./Timeline";
import { Place, TimezoneData } from "../types";
import { useFetchTimezone } from "../hooks";

const Results: React.FC<{
  departPlace: Place;
  departDate: Moment | null | undefined;
  departTime: Moment | null | undefined;
  arrivePlace: Place;
  arriveDate: Moment | null | undefined;
  arriveTime: Moment | null | undefined;
}> = ({
  departPlace,
  departDate,
  departTime,
  arrivePlace,
  arriveDate,
  arriveTime
}) => {
  const [departTimezone, setDepartTimezone] = useState<TimezoneData>();
  const [arriveTimezone, setArriveTimezone] = useState<TimezoneData>();

  useFetchTimezone(departPlace, departDate, departTime, setDepartTimezone);
  useFetchTimezone(arrivePlace, arriveDate, arriveTime, setArriveTimezone);

  const showTimeline = departPlace && arrivePlace;

  return (
    <Row>
      <Row>
        <Col span={4}></Col>
        <Col span={8}>
          <div>{departPlace?.name}</div>
          <div>{departTimezone?.timeZoneName}</div>
        </Col>
        <Col span={8}>
          <div>{arrivePlace?.name}</div>
          <div>{arriveTimezone?.timeZoneName}</div>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        {showTimeline ? (
          <Timeline
            departPlace={departPlace}
            departTime={departTime}
            arrivePlace={arrivePlace}
            arriveTime={arriveTime}
          ></Timeline>
        ) : null}
      </Row>
    </Row>
  );
};

export default Results;
