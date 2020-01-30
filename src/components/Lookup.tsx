import React, { useState } from "react";
import { Row, Col } from "antd";

import LookupRow from "./LookupRow";

import moment from "moment";

const format = "HH:mm";

const Lookup: React.FC = () => {
  const [departTime, setDepartTime] = useState(moment("00:00", format));
  const [departPlace, setDepartPlace] = useState("");
  const [arriveTime, setArriveTime] = useState(moment("00:00", format));
  const [arrivePlace, setArrivePlace] = useState("");

  const handleDepartPlaceChange = (place: string) => {
    setDepartPlace(place);
    console.log(`Place chosen ${place}`);
  };

  const handleArrivePlaceChange = (place: string) => {
    setArrivePlace(place);
    console.log(`Place chosen ${place}`);
  };

  return (
    <Row>
      <Col span={6}></Col>
      <Col span={12}>
        <LookupRow
          label="Departs"
          time={departTime}
          setTime={setDepartTime}
          place={departPlace}
          setPlace={handleDepartPlaceChange}
          timeFormat={format}
        />
        <LookupRow
          label="Arrives"
          time={arriveTime}
          setTime={setArriveTime}
          place={arrivePlace}
          setPlace={handleArrivePlaceChange}
          timeFormat={format}
        />
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

export default Lookup;
