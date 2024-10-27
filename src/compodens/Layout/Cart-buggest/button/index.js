import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

function Buttonn({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  component,  // Thêm thuộc tính component
  ...passProps
}) {
  // Determine the component type
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listeners if the button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  // Determine if the component should be a Link or an anchor tag
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  // Override component type if component prop is provided
  if (component) {
    Comp = component;
  }

  // Generate the class list
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
  });

  // Filter out invalid attributes for HTML elements
  const validProps = {};
  Object.keys(props).forEach((key) => {
    if (props[key] !== true && props[key] !== false) {
      validProps[key] = props[key];
    } else {
      validProps[key] = props[key].toString();
    }
  });

  // Render the component
  return (
    <Comp className={classes} {...validProps}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Buttonn;
  