import * as React from "react";
import { TextField, type TextFieldProps } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export type SelectOption = {
  value: string | number;
  label?: string;
  disabled?: boolean;
};

export type CustomSelectProps = TextFieldProps & {
  options: SelectOption[];
};

export const Select: React.FunctionComponent<CustomSelectProps> = (
  props: CustomSelectProps
) => {
  const { options, ...rest } = props;
  return (
    <TextField
      {...rest}
      select
      InputLabelProps={{
        shrink: false,
        style: { display: "none" }, // 不顯示 label
      }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              overflowX: "hidden",
              maxHeight: 200, // Set the maximum height for the menu
              overflowY: "auto", // Enable vertical scrolling
              "& ul": {
                listStyle: "none !important",
                padding: "0 !important",
                margin: "0 !important",
                minWidth: "100% !important",
              },
            },
          },
          sx: {
            zIndex: 1400,
            "& .MuiMenuItem-root": {
              paddingLeft: "16px !important",
              "&::before": {
                content: '""none" !important"',
              },
            },
          },
        },
      }}
      sx={{
        ".MuiOutlinedInput-notchedOutline": {
          border: "1px solid #E0E0E0",
          borderRadius: "0 !important",
        },
      }}
    >
      {options.map((option) => {
        return (
          <MenuItem
            key={option.value}
            value={option.value}
            aria-label={option.label}
            disabled={option?.disabled === true}
            sx={{
              "&::before": {
                content: '""none" !important"',
                display: "none !important",
              },
            }}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
