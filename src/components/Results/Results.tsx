import React, { useState } from "react";
import { Row, Col, Spin } from "antd";
import { Moment } from "moment";

import styles from "./Results.module.css";

import Headings from "./Headings";
import Timeline from "./Timeline";
import { Place, Timezone } from "../../types";
import { useFetchTimezone } from "../../hooks";
import { calculateFlightDuration } from "../helpers";

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

  const placeDateTimePresent = () => {
    return (
      departPlace &&
      arrivePlace &&
      departDate &&
      arriveDate &&
      departTime &&
      arriveTime
    );
  };

  const timezonesPresent = () => {
    return departTimezone && arriveTimezone;
  };

  const anyDataMissing = () => {
    return !(placeDateTimePresent() && timezonesPresent());
  };

  const onlyTimezonesMissing = () => {
    return placeDateTimePresent() && !timezonesPresent();
  };

  if (onlyTimezonesMissing()) {
    return (
      <Row>
        <Col span={4}></Col>
        <Col span={16} className={styles.centre}>
          <Spin />
        </Col>
        <Col span={4}></Col>
      </Row>
    );
  }

  if (anyDataMissing()) {
    return null;
  }

  const flightDuration = calculateFlightDuration(
    departDate,
    departTime,
    arriveDate,
    arriveTime,
    departTimezone?.utcOffset,
    arriveTimezone?.utcOffset
  );

  return (
    <Row>
      <Headings
        departPlaceName={departPlace.name}
        departTimezoneName={departTimezone?.timeZoneName || ""}
        arrivePlaceName={arrivePlace.name}
        arriveTimezoneName={arriveTimezone?.timeZoneName || ""}
      />
      <Timeline
        departPlace={departPlace}
        departTime={departTime}
        departUtcOffset={departTimezone?.utcOffset || 0}
        arrivePlace={arrivePlace}
        arriveTime={arriveTime}
        arriveUtcOffset={arriveTimezone?.utcOffset || 0}
        flightDuration={flightDuration}
      ></Timeline>
    </Row>
  );
};

export default Results;
