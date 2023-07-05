import React from "react";

import { View, Text } from "..";
import * as presets from "./card.module.scss";
import CardProps from "./card.props";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import placeholder from "../breadcrumbs/home.svg";

const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    className = "",
    preset = "compressed",
    style,
    title,
    description,
    image,
    expanded = false,
    onClickTo,
    ...rest
  } = props;


  return (
    expanded === true ?
      <View
        className={`${presets.expanded} ${className}`}
        {...rest}
      >
        <View className={presets.picture}>
          <GatsbyImage className={presets.image} image={image} alt="" />
        </View>
        {children}
      </ View> :
      <Link
        className={`${presets.compressed} ${className}`}
        to={onClickTo!}
      >
        <View className={presets.picture}>
          <GatsbyImage className={presets.image} image={image} alt="" />

          <View className={presets.text} >
            <Text className={presets.title} text={title} preset="subheader" />
            <Text className={presets.description} text={description} preset="content" />
          </View>
        </View>
      </ Link>
  );
};

export default Card;
