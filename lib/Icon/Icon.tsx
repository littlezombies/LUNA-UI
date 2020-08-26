import React from "react";
import "../../icon/alipay.svg";
import "./iconStyle.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { name } = props;
  return (
    <svg className="icon" {...props}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
