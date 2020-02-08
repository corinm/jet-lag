import React from "react";
import { Moment } from "moment";
import { Row, Col, Timeline as AntTimeline } from "antd";

import { Place, Timezone } from "../types";

const Timeline: React.FC<{
  departPlace: Place;
  departTime: Moment | null | undefined;
  departTimezone: Timezone | undefined;
  arrivePlace: Place;
  arriveTime: Moment | null | undefined;
  arriveTimezone: Timezone | undefined;
}> = ({
  departPlace,
  departTime,
  departTimezone,
  arrivePlace,
  arriveTime,
  arriveTimezone
}) => {
  const showTimeline =
    departPlace &&
    arrivePlace &&
    departTime &&
    arriveTime &&
    departTimezone &&
    arriveTimezone;

  if (!showTimeline) {
    return null;
  }

  const departTimeInDepartTimezone = departTime
    ?.utcOffset(departTimezone?.utcOffset || 0)
    .format("HH:mm");
  const arriveTimeInDepartTimezone = arriveTime
    ?.utcOffset(departTimezone?.utcOffset || 0)
    .format("HH:mm");
  const departTimeInArriveTimezone = departTime
    ?.utcOffset(arriveTimezone?.utcOffset || 0)
    .format("HH:mm");
  const arriveTimeInArriveTimezone = arriveTime
    ?.utcOffset(arriveTimezone?.utcOffset || 0)
    .format("HH:mm");

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={8}>
        <AntTimeline mode="right">
          <AntTimeline.Item>
            Depart {departPlace.name} at {departTimeInDepartTimezone}
          </AntTimeline.Item>
          <AntTimeline.Item>
            Arrive {arrivePlace.name} at {arriveTimeInDepartTimezone}
          </AntTimeline.Item>
        </AntTimeline>
      </Col>
      <Col span={8}>
        <AntTimeline>
          <AntTimeline.Item>
            Depart {departPlace.name} at {departTimeInArriveTimezone}
          </AntTimeline.Item>
          <AntTimeline.Item>
            Arrive {arrivePlace.name} at {arriveTimeInArriveTimezone}
          </AntTimeline.Item>
        </AntTimeline>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Timeline;
