import React from "react";
import { Moment } from "moment";
import { Row, Col, Timeline as AntTimeline } from "antd";

import { Place } from "../types";
import { applyOffset, convertArrivalTime } from "./helpers";

const Timeline: React.FC<{
  departPlace: Place;
  departTime: Moment | null | undefined;
  departUtcOffset: number;
  arrivePlace: Place;
  arriveTime: Moment | null | undefined;
  arriveUtcOffset: number;
}> = ({
  departPlace,
  departTime,
  departUtcOffset,
  arrivePlace,
  arriveTime,
  arriveUtcOffset
}) => {
  const departTimeInDepartTimezone = departTime?.format("HH:mm");
  const arriveTimeInDepartTimezone = convertArrivalTime(
    arriveTime,
    departUtcOffset,
    arriveUtcOffset
  )?.format("HH:mm");
  const departTimeInArriveTimezone = applyOffset(departTime, -departUtcOffset);
  const arriveTimeInArriveTimezone = applyOffset(arriveTime, arriveUtcOffset);

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
