import React, { useState } from "react";
import { Moment } from "moment";
import { Select, DatePicker, TimePicker } from "antd";

import styles from "./Lookup.module.scss";

import { SetDate, SetTime, SetPlace, Place } from "../../types";
import { useSearchLocation } from "../../hooks";
import Loader from "./Loader";
import JoiningText from "./JoiningText";
import LookupRowMobileLayout from "./LookupRowMobileLayout";

const Layout: React.FC<{
  text1: any;
  select1: any;
  text2: any;
  select2: any;
  text3: any;
  select3: any;
  isMobile: boolean;
}> = ({ text1, select1, text2, select2, text3, select3, isMobile }) => {
  if (isMobile) {
    return (
      <Row className={styles.lookupRow}>
        <Row className={styles.lookupMobileRow}>
          <Col span={6}>{text1}</Col>
          <Col span={18}>{select1}</Col>
        </Row>
        <Row className={styles.lookupMobileRow}>
          <Col span={6}>{text2}</Col>
          <Col span={18}>{select2}</Col>
        </Row>
        <Row className={styles.lookupMobileRow}>
          <Col span={6}>{text3}</Col>
          <Col span={18}>{select3}</Col>
        </Row>
      </Row>
    );
  } else {
    return (
      <Row className={styles.lookupRow}>
        <Col span={2}>{text1}</Col>
        <Col span={8}>{select1}</Col>
        <Col span={1}>{text2}</Col>
        <Col span={6}>{select2}</Col>
        <Col span={1}>{text3}</Col>
        <Col span={6}>{select3}</Col>
      </Row>
    );
  }
};

const LookupRow: React.FC<{
  label: string;
  date: Moment | null | undefined;
  setDate: SetDate;
  time: Moment | undefined;
  setTime: SetTime;
  place: Place;
  setPlace: SetPlace;
  timeFormat: string;
  isMobile: boolean;
}> = ({
  label,
  date,
  setDate,
  time,
  setTime,
  place,
  setPlace,
  timeFormat,
  isMobile
}) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);

  useSearchLocation(searchString, setPlaces, setIsSearching);

  // At most there will be five places so iterating is okay
  const findPlace = (id: string): Place =>
    places.filter(place => place.id === id)[0];

  const onPlaceSelect = (placeId: string) => setPlace(findPlace(placeId));

  return (
    <LookupRowMobileLayout
      text1={<JoiningText text={label}></JoiningText>}
      select1={
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
      }
      text2={<JoiningText text="on"></JoiningText>}
      select2={
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          className={styles.fullWidth}
        />
      }
      text3={<JoiningText text="at"></JoiningText>}
      select3={
        <TimePicker
          value={time}
          onChange={setTime}
          format={timeFormat}
          className={styles.fullWidth}
        />
      }
      isMobile={isMobile}
    />
  );
};

export default LookupRow;
