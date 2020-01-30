import React from "react";
import { Moment } from "moment";

import { Row, Col, Select, TimePicker } from "antd";

import { SetTime, SetPlace } from "./types";

const { Option } = Select;

const LookupRow: React.FC<{
  label: string;
  time: Moment;
  setTime: SetTime;
  place: string;
  setPlace: SetPlace;
  timeFormat: string;
}> = ({ label, time, setTime, place, setPlace, timeFormat }) => {
  const places = ["London", "Paris", "Berlin"];

  const handleSearch = (searchString: string) => {
    console.log(`Searching for ${searchString}`);
  };

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
          onSearch={handleSearch}
          onChange={setPlace}
          style={{ width: "100%" }}
        >
          {places.map((option: string, i: number) => (
            <Option key={i} value={option.toLowerCase()}>
              {option}
            </Option>
          ))}
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
