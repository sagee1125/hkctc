import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Language, useSettings } from "../../context";

export const HeaderSocialMedia: React.FC = () => {
  return (
    <>
      <Icon
        icon="mage:camera-2"
        className="h-[20px] w-[20px] text-[#333333] cursor-pointer flex-shrink-0"
        onClick={() => {
          window.location.href = "https://www.instagram.com/hkctcgovhk/";
        }}
      />
      <Icon
        icon="fa6-brands:facebook-f"
        className="h-[20px] w-[20px] text-[#333333] cursor-pointer flex-shrink-0"
        onClick={() => {
          window.location.href = "https://www.facebook.com/hkctcgovhk";
        }}
      />
    </>
  );
};

export const Header: React.FC = () => {
  const [openSearchInput, setOpenSearchInput] = useState<boolean>(false);

  const { handleChangeLang, language } = useSettings();

  const formik = useFormik<{ search: string }>({
    initialValues: {
      search: "",
    },
    validationSchema: object({
      search: string(),
    }),
    onSubmit: (value) => {
      const { search } = value;
      if (search) {
        const preLink = `https://www.search.gov.hk/result?tpl_id=stdsearch&gp0=hkctc_home&ui_charset=utf-8&web=this&ui_lang=en&query=`;
        window.open(preLink + search, "_blank");
      }
    },
  });

  return (
    <>
      <header className="w-full">
        <div
          className="flex-shrink-0"
          style={{
            ...headerStyle,
          }}
        >
          <p className="pl-4 items-center text-body-s">
            The Hong Kong Council for Testing and Certification
          </p>
          <div className="flex flex-row gap-4 items-center pr-4">
            <div
              className="cursor-pointer"
              onClick={() => {
                setOpenSearchInput(!openSearchInput);
              }}
            >
              <Icon icon="ri:search-line" className="h-6 w-6 text-[#333333]" />
            </div>
            {openSearchInput && (
              <form noValidate onSubmit={formik.handleSubmit}>
                <TextField
                  name="search"
                  value={formik.values.search}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          className="!text-body-s"
                          disabled={!formik.values.search}
                          color="primary"
                          type="submit"
                        >
                          GO
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            )}
            <Icon
              icon="mingcute:font-line"
              className="h-6 w-6 text-[#333333] flex-shrink-0"
            />
            <Icon
              icon="ci:globe"
              className="h-6 w-6 text-[#333333] flex-shrink-0 cursor-pointer"
              onClick={() => {
                // TODO
                handleChangeLang(
                  language === Language.EN ? Language.ZH_TW : Language.EN
                );
              }}
            />
            <div
              style={{
                width: "1.5px",
                height: "18px",
                backgroundColor: "#666666",
              }}
              className="flex-shrink-0"
            />
            <HeaderSocialMedia />
          </div>
        </div>
      </header>
    </>
  );
};

const headerStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "56px",
  borderBottom: "1px solid #E0E0E0",
};
