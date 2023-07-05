import React from "react";

import { View, Text } from "..";
import * as presets from "./header.module.scss";
import HeaderProps from "./header.props";

const Header: React.FC<HeaderProps> = (props) => {
  const {
    children,
    className,
    preset = "classic",
    style,
    title,
    breadcrumb,
    ...rest
  } = props;

  return (
    <View
      {...rest}
      className={presets[preset]}
    >
      {breadcrumb}
      {title && <View className={presets.title}>
        <Text text={title} preset="header" />
        <hr className={presets.line} />
      </View>}
      {children}
    </ View>
  );
};

export default Header;
