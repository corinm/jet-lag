import React, { useState } from "react";
import "antd/dist/antd.css";
import { Moment } from "moment";
import { PageHeader } from "antd";

import Lookup from "./components/Lookup";
import Results from "./components/Results";

const App: React.FC = () => {
  const [departPlace, setDepartPlace] = useState();
  const [departDate, setDepartDate] = useState<Moment | null | undefined>();
  const [departTime, setDepartTime] = useState<Moment | undefined>();
  const [arrivePlace, setArrivePlace] = useState();
  const [arriveDate, setArriveDate] = useState<Moment | null | undefined>();
  const [arriveTime, setArriveTime] = useState<Moment | undefined>();

  return (
    <div>
      <PageHeader title="Jet lag"></PageHeader>
      <Lookup
        departPlace={departPlace}
        setDepartPlace={setDepartPlace}
        departDate={departDate}
        setDepartDate={setDepartDate}
        departTime={departTime}
        setDepartTime={setDepartTime}
        arrivePlace={arrivePlace}
        setArrivePlace={setArrivePlace}
        arriveDate={arriveDate}
        setArriveDate={setArriveDate}
        arriveTime={arriveTime}
        setArriveTime={setArriveTime}
      />
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

export default App;
