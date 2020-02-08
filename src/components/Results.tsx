import React, { useState } from "react";
import { Row, Col } from "antd";
import { Moment } from "moment";

import Timeline from "./Timeline";
import { Place, Timezone } from "../types";
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
  const [departTimezone, setDepartTimezone] = useState<Timezone>();
  const [arriveTimezone, setArriveTimezone] = useState<Timezone>();

  useFetchTimezone(departPlace, departDate, departTime, setDepartTimezone);
  useFetchTimezone(arrivePlace, arriveDate, arriveTime, setArriveTimezone);

  const showTimeline =
    departPlace &&
    arrivePlace &&
    departDate &&
    arriveDate &&
    departTime &&
    arriveTime &&
    departTimezone &&
    arriveTimezone;

  return (
    <Row>
      {showTimeline ? (
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
      ) : null}
      <Row>
        {showTimeline ? (
          <Timeline
            departPlace={departPlace}
            departTime={departTime}
            departTimezone={departTimezone}
            arrivePlace={arrivePlace}
            arriveTime={arriveTime}
            arriveTimezone={arriveTimezone}
          ></Timeline>
        ) : null}
      </Row>
    </Row>
  );
};

export default Results;
