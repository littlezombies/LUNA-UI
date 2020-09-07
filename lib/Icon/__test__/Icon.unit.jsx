import React from "react";
import * as renderer from "react-test-renderer";
import Icon from "../Icon";

describe("Icon", () => {
  it("xxx", () => {
    const json = renderer.create(<Icon />).toJSON;
    expect(json).toMatchSnapshot();
  });
});
