import React, { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface HeaderProps extends ApplyBasicProps<HTMLAttributes<HTMLSpanElement>> {
  /** A text that represents the title of this Card. */
  title?: string;

  /** A react Breadcrumb component that should be next to header. */
  breadcrumb?: React.ReactNode;

  /** The name of one of the header presets. */
  preset?: string;
}
