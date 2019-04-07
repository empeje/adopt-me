import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snpashot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});
