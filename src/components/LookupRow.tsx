import React, { useState } from "react";
import { Moment } from "moment";

import { Row, Col, Select, TimePicker } from "antd";

import { SetTime, SetPlace } from "./types";
import { useSearchLocation } from "./hooks";

const { Option } = Select;

const LookupRow: React.FC<{
  label: string;
  time: Moment;
  setTime: SetTime;
  place: string;
  setPlace: SetPlace;
  timeFormat: string;
}> = ({ label, time, setTime, place, setPlace, timeFormat }) => {
  const [places, setPlaces] = useState<string[]>([""]);
  const [searchString, setSearchString] = useState<string>("");

  useSearchLocation(searchString, setPlaces);

  return (
    <Row>
      <Col
        span={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 32
        }}
      >
        {label}
      </Col>
      <Col span={8}>
        <Select
          showSearch
          value={place}
          onSearch={str => setSearchString(str)}
          onChange={setPlace}
          style={{ width: "100%" }}
        >
          {places.map((option: string, i: number) => {
            return (
              <Option key={i} value={option.toLowerCase()}>
                {option}
              </Option>
            );
          })}
        </Select>
      </Col>
      <Col
        span={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 32
        }}
      >
        at
      </Col>
      <Col span={10}>
        <TimePicker
          value={time}
          onChange={setTime}
          format={timeFormat}
          style={{ width: "100%" }}
        />
      </Col>
    </Row>
  );
};

export default LookupRow;
