import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import LookupRow from "./LookupRow";
import { searchCity } from "../../services/cities";

jest.mock("../../services/cities", () => ({ searchCity: jest.fn() }));

describe("<LookupRow />", () => {
  it("should do something", async () => {
    const { container } = render(
      <LookupRow
        label="A"
        date={null}
        setDate={() => {}}
        time={null}
        setTime={() => {}}
        place={{ id: "", name: "" }}
        setPlace={() => {}}
        timeFormat="HH:mm"
        isMobile={false}
      />
    );

    const inputs = container.getElementsByTagName("input");

    const citySearch = inputs.item(0);

    // Otherwise typescript complains it could be null
    if (!citySearch) throw new Error("citySearch not found");

    expect(citySearch?.value).toBe("");

    fireEvent.change(citySearch, { target: { value: "Lon" } });

    expect(citySearch?.value).toBe("Lon");
    expect(searchCity).toHaveBeenCalled();
  });
});
