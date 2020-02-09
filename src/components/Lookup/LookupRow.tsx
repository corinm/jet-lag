import React, { useState } from "react";
import { Moment } from "moment";
import { Row, Col, Select, DatePicker, TimePicker } from "antd";

import styles from "./Lookup.module.css";

import { SetDate, SetTime, SetPlace, Place } from "../../types";
import { useSearchLocation } from "../../hooks";
import Loader from "./Loader";
import JoiningText from "./JoiningText";

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
  const [isSearching, setIsSearching] = useState(false);

  useSearchLocation(searchString, setPlaces, setIsSearching);

  // At most there will be five places so iterating is okay
  const findPlace = (id: string): Place =>
    places.filter(place => place.id === id)[0];

  const onPlaceSelect = (placeId: string) => setPlace(findPlace(placeId));

  return (
    <Row>
      <JoiningText span={2} text={label}></JoiningText>
      <Col span={8}>
        <Select
          showSearch
          value={place ? place.name : ""}
          onSearch={setSearchString}
          onChange={onPlaceSelect}
          showArrow={false}
          filterOption={false}
          notFoundContent={isSearching ? <Loader /> : null}
          className={styles.fullWidth}
          allowClear
        >
          {places.map((place: Place, i: number) => (
            <Select.Option key={i} value={place.id}>
              {place.name}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <JoiningText span={1} text="on"></JoiningText>
      <Col span={6}>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          className={styles.fullWidth}
        />
      </Col>
      <JoiningText span={1} text="at"></JoiningText>
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
