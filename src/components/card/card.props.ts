import { IGatsbyImageData } from "gatsby-plugin-image";
import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface CardProps extends ApplyBasicProps<HTMLAttributes<HTMLImageElement>> {
  image: IGatsbyImageData;

  /** The topic of this card. */
  title?: string;

  /** One sentence what the card is about. */
  description?: string;

  /** A bool that indicates if card is expanded. */
  expanded?: boolean;

  /** The action that should be executed when card is clicked. */
  onClickTo?: string;

  /** The name of one of the button presets. */
  preset?: string;
}
