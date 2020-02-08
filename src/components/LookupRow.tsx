import React, { useState } from "react";
import { Moment } from "moment";

import { Row, Col, Select, TimePicker } from "antd";

import { SetTime, SetPlace, Place } from "../types";
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
  const [places, setPlaces] = useState<Place[]>([]);
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
          filterOption={false}
          style={{ width: "100%" }}
        >
          {places.map((place: Place, i: number) => {
            return (
              <Option key={i} value={place.id}>
                {place.name}
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
