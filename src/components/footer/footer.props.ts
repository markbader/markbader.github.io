import { HTMLAttributes } from "react";
import { ApplyBasicProps } from "../types";

export default interface FooterProps extends ApplyBasicProps<HTMLAttributes<HTMLSpanElement>> {
  /** The name of one of the header presets. */
  preset?: string;
}
