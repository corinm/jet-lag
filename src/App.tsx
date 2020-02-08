import React from "react";
import "antd/dist/antd.css";
import { PageHeader } from "antd";

import "./App.css";
import Lookup from "./components/Lookup";

const App: React.FC = () => {
  return (
    <div>
      <PageHeader title="Jet lag"></PageHeader>
      <Lookup />
    </div>
  );
};

export default App;
