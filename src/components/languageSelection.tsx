import React from "react";
import { Language, useSettings } from "../context/SettingsContext";
import { Menu, MenuItem } from "@mui/material";
import { Button } from "./Button";

type LanguageOption = {
  label: string;
  value: Language;
};

export const languageOptions: LanguageOption[] = [
  {
    label: "繁",
    value: Language.ZH_TW,
  },
  {
    label: "简",
    value: Language.ZH_CN,
  },
  {
    label: "EN",
    value: Language.EN,
  },
];

const LanguageSelect: React.FC = () => {
  const { language, handleChangeLang, isPC } = useSettings();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lan: Language) => (): void => {
    handleChangeLang(lan);
    setAnchorEl(null);
  };

  const currentOptions = languageOptions.find(
    (lan, index) => lan.value === language
  )?.label;

  return (
    <div tabIndex={-1} onMouseLeave={handleClose} role="button">
      <Button
        tabIndex={0}
        aria-label="switch language"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        onMouseEnter={handleClick}
        variant="text"
        sx={{
          minWidth: "auto",
        }}
      >
        <p className={isPC ? "text-body-m" : "text-body-l"}>{currentOptions}</p>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        tabIndex={0}
        onClose={handleClose}
        onMouseLeave={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1,
              ml: 1,
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 22,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        sx={{
          ".MuiList-root": {
            paddingLeft: "0 !important",
            borderRadius: "0 !important",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {languageOptions.map((lan, i) => {
          return (
            <MenuItem
              onClick={handleLanguageChange(lan.value)}
              key={i}
              tabIndex={0}
              sx={{
                listStyle: "none",
                color: lan.value === language ? "#233F55" : "#000000",
                textAlign: "center",
              }}
              aria-label={lan.label}
            >
              {lan.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default LanguageSelect;
