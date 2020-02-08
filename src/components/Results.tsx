import React, { useState } from "react";
import { Row } from "antd";
import { Moment } from "moment";

import Headings from "./Headings";
import Timeline from "./Timeline";
import { Place, Timezone } from "../types";
import { useFetchTimezone } from "../hooks";

const Results: React.FC<{
  departPlace: Place;
  departDate: Moment | null | undefined;
  departTime: Moment | null | undefined;
  arrivePlace: Place;
  arriveDate: Moment | null | undefined;
  arriveTime: Moment | null | undefined;
}> = ({
  departPlace,
  departDate,
  departTime,
  arrivePlace,
  arriveDate,
  arriveTime
}) => {
  const [departTimezone, setDepartTimezone] = useState<Timezone>();
  const [arriveTimezone, setArriveTimezone] = useState<Timezone>();

  useFetchTimezone(departPlace, departDate, departTime, setDepartTimezone);
  useFetchTimezone(arrivePlace, arriveDate, arriveTime, setArriveTimezone);

  const allDataPresent =
    departPlace &&
    arrivePlace &&
    departDate &&
    arriveDate &&
    departTime &&
    arriveTime &&
    departTimezone &&
    arriveTimezone;

  if (!allDataPresent) {
    return null;
  }

  return (
    <Row>
      <Headings
        departPlaceName={departPlace.name}
        departTimezoneName={departTimezone?.timeZoneName || ""}
        arrivePlaceName={arrivePlace.name}
        arriveTimezoneName={arriveTimezone?.timeZoneName || ""}
      />
      <Timeline
        departPlace={departPlace}
        departTime={departTime}
        departTimezoneUtcOffset={departTimezone?.utcOffset || 0}
        arrivePlace={arrivePlace}
        arriveTime={arriveTime}
        arriveTimezoneUtcOffset={arriveTimezone?.utcOffset || 0}
      ></Timeline>
    </Row>
  );
};

export default Results;
