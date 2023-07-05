import React from "react";

import Text from "../text";
import * as presets from "./button.module.scss";
import ButtonProps from "./button.props";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    preset = "classic",
    style,
    text,
    icon,
    ...rest
  } = props;

  const content = text ? <Text text={text} /> : children;

  return (
    <button
      {...rest}
      className={presets[preset]}
    >
      {icon}
      {content}
    </button>
  );
};

export default Button;
