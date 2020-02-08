import React from "react";
import { Moment } from "moment";
import { Row, Col, Timeline as AntTimeline } from "antd";

import { Place } from "../types";

const Timeline: React.FC<{
  departPlace: Place;
  departTime: Moment | null | undefined;
  departTimezoneUtcOffset: number;
  arrivePlace: Place;
  arriveTime: Moment | null | undefined;
  arriveTimezoneUtcOffset: number;
}> = ({
  departPlace,
  departTime,
  departTimezoneUtcOffset,
  arrivePlace,
  arriveTime,
  arriveTimezoneUtcOffset
}) => {
  const departTimeInDepartTimezone = departTime
    ?.clone()
    ?.utcOffset(departTimezoneUtcOffset)
    .format("HH:mm");
  const arriveTimeInDepartTimezone = arriveTime
    ?.clone()
    ?.utcOffset(departTimezoneUtcOffset)
    .format("HH:mm");
  const departTimeInArriveTimezone = departTime
    ?.clone()
    ?.utcOffset(arriveTimezoneUtcOffset)
    .format("HH:mm");
  const arriveTimeInArriveTimezone = arriveTime
    ?.clone()
    ?.utcOffset(arriveTimezoneUtcOffset)
    .format("HH:mm");

  return (
    <Row>
      <Col span={4}></Col>
      <Col span={7}>
        <AntTimeline mode="right">
          <AntTimeline.Item>
            Depart {departPlace.name} at {departTimeInDepartTimezone}
          </AntTimeline.Item>
          <AntTimeline.Item>
            Arrive {arrivePlace.name} at {arriveTimeInDepartTimezone}
          </AntTimeline.Item>
        </AntTimeline>
      </Col>
      <Col span={2}></Col>
      <Col span={7}>
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
