import * as React from "react";
import FormControlLabel, {
  type FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import MCheckbox from "@mui/material/Checkbox";

export type CheckboxProps = Omit<FormControlLabelProps, "control"> & {
  value: boolean;
  error?: boolean;
  disabledGray?: boolean;
  size?: "small" | "medium";
};

export const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps
) => {
  const {
    value,
    error,
    disabled,
    size = "medium",
    disabledGray = false,
    color,
    ...rest
  } = props;
  const checkboxColor = error
    ? "#d32f2f"
    : disabled
    ? "rgba(150, 30, 30, 0.4)"
    : color;

  return (
    <FormControlLabel
      {...rest}
      style={error ?? disabled ? { color: "#d32f2f" } : {}}
      control={
        <MCheckbox
          size={size}
          checked={value}
          style={{
            ...(disabledGray ? {} : { color: checkboxColor }),
          }}
          disabled={disabled}
        />
      }
    />
  );
};
