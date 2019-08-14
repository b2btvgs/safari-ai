import React from "react";
import { Button } from "react-bootstrap";
import { MdDataUsage } from "react-icons/md";
import "./LoaderButton.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) => (
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <MdDataUsage className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>
);
