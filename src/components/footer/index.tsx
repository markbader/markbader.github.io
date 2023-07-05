import React from "react";

import { View, Text, Button } from "..";
import * as presets from "./footer.module.scss";
import FooterProps from "./footer.props";
import { Link } from "gatsby";

const Footer: React.FC<FooterProps> = (props) => {
  const {
    children,
    className,
    preset = "classic",
    style,
    ...rest
  } = props;


  return (
    <View
      {...rest}
      className={presets[preset]}
    >
      <Text text="© Mark Bader" />
      <Text text="|" />
      <Link to="/about" className={presets.link}><Button text="Impressum" preset="flat" /></Link>
    </ View>
  );
};

export default Footer;
