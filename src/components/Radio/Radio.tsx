import * as React from "react";
import FormControlLabel, {
  type FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import MRadio, { type RadioProps as MRadioProps } from "@mui/material/Radio";

export type RadioProps = Omit<FormControlLabelProps, "control"> &
  MRadioProps & {
    checked: boolean;
    error?: boolean;
  };

export const Radio: React.FunctionComponent<RadioProps> = (
  props: RadioProps
) => {
  const { checked, error, size, ...rest } = props;
  return (
    <FormControlLabel
      {...rest}
      style={error ? { color: "#D32F2F" } : {}}
      control={
        <MRadio
          checked={checked}
          style={error ? { color: "#D32F2F" } : {}}
          size={size}
        />
      }
    />
  );
};
