import React, { useCallback } from "react";

import { View, Button, Icon, Text } from "..";
import * as presets from "./breadcrumbs.module.scss";
import * as home from "./home.svg";

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
      <Link to='/'>
        <Button
          icon={<Icon src={home} preset="small" />}
          preset="flat"
        />
      </Link>
      {isNotHome() && 
      <>
        <Text text="/" /> 
        {path && <Link to={path.path}><Button preset="flat" text={path?.title} /></Link>}
      </>}
    </View>
  );
};

export default Breadcrumbs;
