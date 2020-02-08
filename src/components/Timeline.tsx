import React from "react";
import { Moment } from "moment";
import { Row, Col, Timeline as AntTimeline } from "antd";

import { Place } from "../types";

const Timeline: React.FC<{
  departPlace: Place;
  departTime: Moment | null | undefined;
  arrivePlace: Place;
  arriveTime: Moment | null | undefined;
}> = ({ departPlace, departTime, arrivePlace, arriveTime }) => {
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={8}>
        <AntTimeline>
          <AntTimeline.Item>
            Depart {departPlace.name} at {departTime?.format("HH:mm")}
          </AntTimeline.Item>
          <AntTimeline.Item>
            Arrive {arrivePlace.name} at {arriveTime?.format("HH:mm")}
          </AntTimeline.Item>
        </AntTimeline>
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Timeline;
