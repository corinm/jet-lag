import React, { useState } from "react";
import "antd/dist/antd.css";
import { Moment } from "moment";
import { Layout } from "antd";

import styles from "./App.module.scss";

import Lookup from "./components/Lookup/Lookup";
import Results from "./components/Results/Results";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [departPlace, setDepartPlace] = useState();
  const [departDate, setDepartDate] = useState<Moment | null>(null);
  const [departTime, setDepartTime] = useState<Moment | null>(null);
  const [arrivePlace, setArrivePlace] = useState();
  const [arriveDate, setArriveDate] = useState<Moment | null>(null);
  const [arriveTime, setArriveTime] = useState<Moment | null>(null);

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
      <Layout.Footer className={styles.footer}>
        <Footer></Footer>
      </Layout.Footer>
    </Layout>
  );
};

export default App;
