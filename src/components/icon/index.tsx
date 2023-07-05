import React from "react";

import * as presets from "./icon.module.scss";
import IconProps from "./icon.props";

const Icon: React.FC<IconProps> = (props) => {
  const {
    children,
    className,
    preset = "classic",
    style,
    src,
    ...rest
  } = props;

  return (
    <img
      {...rest}
      className={`${presets[preset]} ${className}`}
      alt="Icon"
      src={src}
    />
  );
};

export default Icon;
