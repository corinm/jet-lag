import React, { useState } from "react";
import { Moment } from "moment";
import { Row, Col, Select, DatePicker, TimePicker } from "antd";

import styles from "./LookupRow.module.css";
import { SetDate, SetTime, SetPlace, Place } from "../types";
import { useSearchLocation } from "../hooks";

const { Option } = Select;

const LookupRow: React.FC<{
  label: string;
  date: Moment | null | undefined;
  setDate: SetDate;
  time: Moment | undefined;
  setTime: SetTime;
  place: Place;
  setPlace: SetPlace;
  timeFormat: string;
}> = ({ label, date, setDate, time, setTime, place, setPlace, timeFormat }) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchString, setSearchString] = useState<string>("");

  useSearchLocation(searchString, setPlaces);

  // At most there will be five places so iterating is okay
  const findPlace = (id: string): Place =>
    places.filter(place => place.id === id)[0];

  return (
    <Row>
      <Col span={2} className={styles.joiningText}>
        {label}
      </Col>
      <Col span={8}>
        <Select
          showSearch
          value={place ? place.name : ""}
          onSearch={str => setSearchString(str)}
          onChange={(placeId: string) => setPlace(findPlace(placeId))}
          showArrow={false}
          filterOption={false}
          notFoundContent={null}
          className={styles.fullWidth}
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
      <Col span={1} className={styles.joiningText}>
        on
      </Col>
      <Col span={6}>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          className={styles.joiningText}
        />
      </Col>
      <Col span={1} className={styles.joiningText}>
        at
      </Col>
      <Col span={6}>
        <TimePicker
          value={time}
          onChange={setTime}
          format={timeFormat}
          className={styles.fullWidth}
        />
      </Col>
    </Row>
  );
};

export default LookupRow;
