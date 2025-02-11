import * as React from "react";
import MButton, { type ButtonProps } from "@mui/material/Button";
import { Tooltip } from "@mui/material";

export const Button: React.FunctionComponent<
  ButtonProps & { title?: string }
> = (props: ButtonProps) => {
  const { title, ...buttonProps } = props;
  return (
    <Tooltip title={title}>
      <span>
        <MButton {...buttonProps} />
      </span>
    </Tooltip>
  );
};
