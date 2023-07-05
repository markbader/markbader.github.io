import React from "react";

import * as presets from "./text.module.scss";
import TextProps from "./text.props";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const Text: React.FC<TextProps> = (props) => {
  const {
    children,
    className,
    preset = "classic",
    style,
    text,
    ...rest
  } = props;

  const html_content = text ? {__html: text} : undefined

  return (
    <span
      {...rest}
      className={`${presets[preset]} ${className!}`}
      dangerouslySetInnerHTML={html_content}
    />
  );
};

export default Text;
