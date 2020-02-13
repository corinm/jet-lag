import React, { useState } from "react";
import { Row, Col } from "antd";
import { Moment } from "moment";

import styles from "./Lookup.module.scss";

import { Place, SetDate, SetTime, SetPlace } from "../../types";
import LookupRow from "./LookupRow";
import { useCheckScreenWidth } from "../../hooks";

const format = "HH:mm";

const Lookup: React.FC<{
  departDate: Moment | null;
  setDepartDate: SetDate;
  departTime: Moment | null;
  setDepartTime: SetTime;
  departPlace: Place;
  setDepartPlace: SetPlace;
  arriveDate: Moment | null;
  setArriveDate: SetDate;
  arriveTime: Moment | null;
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
  const [isMobile, setIsMobile] = useState(false);
  const [leftSpan, centerSpan, rightSpan] = isMobile ? [1, 22, 1] : [2, 20, 2];

  useCheckScreenWidth(isMobile, setIsMobile);

  return (
    <Row className={styles.outerRow}>
      <Col span={leftSpan}></Col>
      <Col span={centerSpan}>
        <LookupRow
          label="Departs"
          date={departDate}
          setDate={setDepartDate}
          time={departTime}
          setTime={setDepartTime}
          place={departPlace}
          setPlace={setDepartPlace}
          timeFormat={format}
          isMobile={isMobile}
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
          isMobile={isMobile}
        />
      </Col>
      <Col span={rightSpan}></Col>
    </Row>
  );
};

export default Lookup;
