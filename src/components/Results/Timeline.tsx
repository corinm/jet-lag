import React from "react";
import { Moment } from "moment";
import { Row, Col, Timeline as AntTimeline, Icon } from "antd";

import styles from "./Timeline.module.css";

import { Place } from "../../types";
import { convertArrivalTime, convertDepartureTime } from "../helpers";
import TakeOffIcon from "./TakeoffIcon";
import LandingIcon from "./LandingIcon";

const Timeline: React.FC<{
  departPlace: Place;
  departTime: Moment | null | undefined;
  departUtcOffset: number;
  arrivePlace: Place;
  arriveTime: Moment | null | undefined;
  arriveUtcOffset: number;
  flightDuration: string;
}> = ({
  departPlace,
  departTime,
  departUtcOffset,
  arrivePlace,
  arriveTime,
  arriveUtcOffset,
  flightDuration
}) => {
  const departTimeInDepartTimezone = departTime?.format("HH:mm");
  const arriveTimeInDepartTimezone = convertArrivalTime(
    arriveTime,
    departUtcOffset,
    arriveUtcOffset
  )?.format("HH:mm");
  const departTimeInArriveTimezone = convertDepartureTime(
    departTime,
    departUtcOffset,
    arriveUtcOffset
  )?.format("HH:mm");
  const arriveTimeInArriveTimezone = arriveTime?.format("HH:mm");

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={7}>
        <AntTimeline mode="right">
          <AntTimeline.Item className={styles.place} dot={<TakeOffIcon />}>
            Depart {departPlace.name} at {departTimeInDepartTimezone}
          </AntTimeline.Item>
          <AntTimeline.Item
            color="gray"
            dot={<Icon type="clock-circle" />}
            className={styles.duration}
          >
            {flightDuration}
          </AntTimeline.Item>
          <AntTimeline.Item className={styles.place} dot={<LandingIcon />}>
            Arrive {arrivePlace.name} at {arriveTimeInDepartTimezone}
          </AntTimeline.Item>
        </AntTimeline>
      </Col>
      <Col span={2}></Col>
      <Col span={7}>
        <AntTimeline>
          <AntTimeline.Item className={styles.place} dot={<TakeOffIcon />}>
            Depart {departPlace.name} at {departTimeInArriveTimezone}
          </AntTimeline.Item>
          <AntTimeline.Item
            color="gray"
            dot={<Icon type="clock-circle" />}
            className={styles.duration}
          >
            {flightDuration}
          </AntTimeline.Item>
          <AntTimeline.Item className={styles.place} dot={<LandingIcon />}>
            Arrive {arrivePlace.name} at {arriveTimeInArriveTimezone}
          </AntTimeline.Item>
        </AntTimeline>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Timeline;
