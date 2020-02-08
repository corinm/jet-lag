import React from "react";
import { Row, Col } from "antd";
import { Moment } from "moment";

import { Place, SetDate, SetTime, SetPlace } from "../types";
import LookupRow from "./LookupRow";
import styles from "./Lookup.module.css";

const format = "HH:mm";

const Lookup: React.FC<{
  departDate: Moment | null | undefined;
  setDepartDate: SetDate;
  departTime: Moment | undefined;
  setDepartTime: SetTime;
  departPlace: Place;
  setDepartPlace: SetPlace;
  arriveDate: Moment | null | undefined;
  setArriveDate: SetDate;
  arriveTime: Moment | undefined;
  setArriveTime: SetTime;
  arrivePlace: Place;
  setArrivePlace: SetPlace;
}> = ({
  departDate,
  setDepartDate,
  departTime,
  setDepartTime,
  departPlace,
  setDepartPlace,
  arriveDate,
  setArriveDate,
  arriveTime,
  setArriveTime,
  arrivePlace,
  setArrivePlace
}) => {
  return (
    <Row className={styles.row}>
      <Col span={2}></Col>
      <Col span={20}>
        <LookupRow
          label="Departs"
          date={departDate}
          setDate={setDepartDate}
          time={departTime}
          setTime={setDepartTime}
          place={departPlace}
          setPlace={setDepartPlace}
          timeFormat={format}
        />
        <LookupRow
          label="Arrives"
          date={arriveDate}
          setDate={setArriveDate}
          time={arriveTime}
          setTime={setArriveTime}
          place={arrivePlace}
          setPlace={setArrivePlace}
          timeFormat={format}
        />
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default Lookup;
