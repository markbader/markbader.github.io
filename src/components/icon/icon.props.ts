import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface IconProps
  extends ApplyBasicProps<HTMLAttributes<HTMLImageElement>> {
  src: string;
  preset?: string;
}
