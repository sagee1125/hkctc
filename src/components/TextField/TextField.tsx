import * as React from "react";
import MTextField, { type TextFieldProps } from "@mui/material/TextField";

export const TextField: React.FunctionComponent<TextFieldProps> = (
  props: TextFieldProps
) => {
  return (
    <MTextField
      {...props}
      sx={{
        ".MuiOutlinedInput-notchedOutline": {
          border: "1px solid #E0E0E0",
          borderRadius: "0 !important",
        },
      }}
    />
  );
};
