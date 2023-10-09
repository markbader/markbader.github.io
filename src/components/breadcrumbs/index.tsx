import React, { useCallback } from "react";

import { View, Text } from "..";
import * as presets from "./breadcrumbs.module.scss";

import BreadcrumbsProps from "./breadcrumbs.props";
import { Link } from "gatsby";

/** A button that navigates you back to the last visited site of the app. */
const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { className, preset = "classic", path, style } = props;

  const isNotHome = useCallback(() =>
    path && path.path !== "/"
    , [path]);


  return (
    <View
      className={presets[preset]}
    >
      <Link className={presets.link} to='/'>&#x1f464;</Link>
      {isNotHome() &&
        <>
          <Text className={presets.link} text="/" />
          {path && <Link className={presets.link} to={path.path}>{path?.title}</Link>}
        </>}
    </View>
  );
};

export default Breadcrumbs;

