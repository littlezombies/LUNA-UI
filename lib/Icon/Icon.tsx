import React from "react";
import "../../icon/alipay.svg";
import "./iconStyle.scss";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name } = props;
  return (
    <svg className="icon">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
