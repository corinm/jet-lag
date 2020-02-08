import React, { useState } from "react";
import moment from "moment";
import { Row, Col } from "antd";

import LookupRow from "./LookupRow";
import Results from "./Results";

const format = "HH:mm";

const Lookup: React.FC = () => {
  const [departPlace, setDepartPlace] = useState();
  const [departTime, setDepartTime] = useState(moment("00:00", format));
  const [arrivePlace, setArrivePlace] = useState();
  const [arriveTime, setArriveTime] = useState(moment("00:00", format));

  return (
    <div>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <LookupRow
            label="Departs"
            time={departTime}
            setTime={setDepartTime}
            place={departPlace}
            setPlace={setDepartPlace}
            timeFormat={format}
          />
          <LookupRow
            label="Arrives"
            time={arriveTime}
            setTime={setArriveTime}
            place={arrivePlace}
            setPlace={setArrivePlace}
            timeFormat={format}
          />
        </Col>
        <Col span={6}></Col>
      </Row>
      <Results departPlace={departPlace} arrivePlace={arrivePlace}></Results>
    </div>
  );
};

export default Lookup;
