import * as React from "react";
import { TextField, type TextFieldProps } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export type SelectOption = {
  value: string | number;
  label?: string | number;
  disabled?: boolean;
  children?: SelectOption[];
};

export type CustomSelectProps = TextFieldProps & {
  options: SelectOption[];
  isGroup?: boolean;
  clearable?: boolean;
};

export const EmptySelection: SelectOption = {
  value: "",
  label: "-------Select-------",
};

export const Select: React.FunctionComponent<CustomSelectProps> = (
  props: CustomSelectProps
) => {
  const { clearable = false, options, ...rest } = props;
  const selectOptions = [...(clearable ? [EmptySelection] : []), ...options];
  return (
    <TextField
      {...rest}
      select
      SelectProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              overflowX: "hidden",
              maxHeight: 200, // Set the maximum height for the menu
              overflowY: "auto", // Enable vertical scrolling
            },
          },
          sx: {
            zIndex: 1400,
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
      {selectOptions.map((option) => {
        return (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option?.disabled === true}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
