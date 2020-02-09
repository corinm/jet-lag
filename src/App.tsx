import React, { useState } from "react";
import "antd/dist/antd.css";
import { Moment } from "moment";
import { Layout } from "antd";

import styles from "./App.module.css";

import Lookup from "./components/Lookup";
import Results from "./components/Results";
import Copyright from "./components/Copyright";

const App: React.FC = () => {
  const [departPlace, setDepartPlace] = useState();
  const [departDate, setDepartDate] = useState<Moment | null | undefined>();
  const [departTime, setDepartTime] = useState<Moment | undefined>();
  const [arrivePlace, setArrivePlace] = useState();
  const [arriveDate, setArriveDate] = useState<Moment | null | undefined>();
  const [arriveTime, setArriveTime] = useState<Moment | undefined>();

  return (
    <Layout>
      <Layout.Header className={styles.header}>Jet lag</Layout.Header>
      <Layout.Content className={styles.contentBorder}>
        <div className={styles.contentInner}>
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
      </Layout.Content>
      <Layout.Footer>
        <Copyright></Copyright>
      </Layout.Footer>
    </Layout>
  );
};

export default App;
