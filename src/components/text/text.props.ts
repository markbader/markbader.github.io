import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface TextProps
  extends ApplyBasicProps<HTMLAttributes<HTMLSpanElement>> {
  /**
   * The text to display if not using `tx` or nested components.
   * It takes precedence over children, but not `tx`.
   */
  text?: string;

  /** The name of one of the text presets. */
  preset?: string;
}
