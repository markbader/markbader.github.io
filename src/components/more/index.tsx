import React from "react";

import { View, Text } from "..";
import * as presets from "./more.module.scss";
import MoreProps from "./more.props";
import { Link } from "gatsby";

const More: React.FC<MoreProps> = (props) => {
  const {
    children,
    className,
    preset = "classic",
    style,
    to,
    ...rest
  } = props;


  return (
    <View
      {...rest}
      className={presets[preset]}
    >
      <Link to={to} className={presets.link}><Text text="Mehr anzeigen ..." /></Link>
    </ View>
  );
};

export default More;
