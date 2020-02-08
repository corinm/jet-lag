import React, { useState } from "react";
import moment, { Moment } from "moment";
import { Row, Col } from "antd";

import LookupRow from "./LookupRow";
import Results from "./Results";

const format = "HH:mm";

const Lookup: React.FC = () => {
  const [departPlace, setDepartPlace] = useState();
  const [departDate, setDepartDate] = useState<Moment | null | undefined>();
  const [departTime, setDepartTime] = useState(moment("00:00", format));
  const [arrivePlace, setArrivePlace] = useState();
  const [arriveDate, setArriveDate] = useState<Moment | null | undefined>();
  const [arriveTime, setArriveTime] = useState(moment("00:00", format));

  return (
    <div>
      <Row>
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
      <Results
        departPlace={departPlace}
        departDate={departDate}
        departTime={departTime}
        arrivePlace={arrivePlace}
        arriveDate={arriveDate}
        arriveTime={arriveTime}
      ></Results>
    </div>
  );
};

export default Lookup;
