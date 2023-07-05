import React from "react";

import ViewProps from "./view.props";

/**
 * A basic container.
 */
const View: React.FC<ViewProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default View;
