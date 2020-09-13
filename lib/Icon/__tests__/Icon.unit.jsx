import React from "react";
import * as renderer from "react-test-renderer";
import Icon from "../Icon.tsx";

describe("Icon", () => {
  it("render test", () => {
    const json = renderer.create(<Icon name="alipay" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
