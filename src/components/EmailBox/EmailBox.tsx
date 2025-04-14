import { CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useSettings } from "../../context";
import { object, string } from "yup";
const multilingual = {
  en: {
    enquiries: `Enquiries`,
    contact: "Contact us to know more about Testing and Certification.",
    name: "Your name",
    email: "Email address",
    write_down: "Write down your message",
    send: "Send now",
    pls_name: "Please enter your name",
    pls_email: "Please enter your email address",
    pls_msg: "Please write down your message",
  },

  cn: {
    enquiries: `查詢`,
    contact: "聯繫我們以了解有關測試和認證的更多信息",
    name: "姓名",
    email: "電子郵件",
    write_down: "寫下你的訊息",
    send: "立即發送",
    pls_name: "請輸入您的名字",
    pls_email: "請輸入您的郵箱",
    pls_msg: "寫下您的訊息",
  },
};
type EnquiriesData = { name?: string; email?: string; msg?: string };

export const EmailBox: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { getPageText } = useSettings();

  const page_text = getPageText(multilingual);

  const {
    enquiries,
    contact,
    name,
    email,
    write_down,
    send,
    pls_email,
    pls_msg,
    pls_name,
  } = page_text;

  const handleButtonClick = async (enquiriesData: EnquiriesData) => {
    setLoading(true);

    // const formData = {
    //   do: "test.mail",
    //   u_name: "John Doe",
    //   u_email: "johndoe@example.com",
    // };

    try {
      const response = await fetch("https://localhost:8000/api/process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(enquiriesData).toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      const data = await response.json();

      alert(data);
    } catch (err: any) {
      alert(err);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik<EnquiriesData>({
    initialValues: {
      name: undefined,
      email: undefined,
      msg: undefined,
    },
    validationSchema: object({
      name: string().required(pls_name as string),
      email: string()
        .email()
        .required(pls_email as string),
      msg: string().required(pls_msg as string),
    }),
    // TODO: will start once backend database is finished
    onSubmit: handleButtonClick,
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className="text-heading-l pb-[16px]">{enquiries as string}</div>
      <div className="bg-[#EAEAE5] border border-[1px] border-[#858585] w-full px-[24px] py-[22px] flex flex-col gap-[16px]">
        <div className="text-body-m">{contact as string}</div>
        <TextField
          name="name"
          value={formik.values.name}
          placeholder={name as string}
          label={name as string}
          aria-label={name as string}
          required
          aria-required="true"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          size="small"
          InputProps={{
            sx: {
              "&::placeholder": {
                color: "#666666", // 自定義 placeholder 顏色
              },
            },
          }}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={Boolean(formik.touched.name) && formik.errors.name}
          id="name-input"
          FormHelperTextProps={{
            id: "name-helper",
          }}
          inputProps={{
            "aria-describedby": "name-helper",
            "aria-errormessage": formik.errors.name ? "name-helper" : undefined,
          }}
          sx={{
            ".MuiOutlinedInput-notchedOutline": {
              border: "1px solid #858585",
              borderRadius: "0 !important",
            },
            ".MuiInputBase-root": {
              background: "#ffffff",
            },
            color: "#666666",
          }}
          InputLabelProps={{
            shrink: false,
            style: { display: "none" },
          }}
        />
        <TextField
          name="email"
          value={formik.values.email}
          placeholder={email as string}
          label={email as string}
          aria-label={email as string}
          aria-required="true"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          size="small"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={Boolean(formik.touched.email) && formik.errors.email}
          InputProps={{
            sx: {
              "&::placeholder": {
                color: "#666666",
              },
            },
          }}
          id="email-input"
          FormHelperTextProps={{
            id: "email-helper",
          }}
          inputProps={{
            "aria-describedby": "email-helper",
            "aria-errormessage": formik.errors.email
              ? "email-helper"
              : undefined,
          }}
          sx={{
            color: "#666666",
            ".MuiOutlinedInput-notchedOutline": {
              border: "1px solid #858585",
              borderRadius: "0 !important",
            },
            ".MuiInputBase-root": {
              background: "#ffffff",
            },
          }}
          InputLabelProps={{
            shrink: false,
            style: { display: "none" },
          }}
        />
        <TextField
          name="msg"
          required
          value={formik.values.msg}
          aria-required="true"
          label={write_down as string}
          placeholder={write_down as string}
          aria-label={write_down as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          multiline
          rows={4}
          size="small"
          error={formik.touched.msg && Boolean(formik.errors.msg)}
          helperText={Boolean(formik.touched.msg) && formik.errors.msg}
          id="msg-input"
          InputProps={{
            sx: {
              "&::placeholder": {
                color: "#666666",
              },
            },
          }}
          InputLabelProps={{
            shrink: false,
            style: { display: "none" },
          }}
          FormHelperTextProps={{
            id: "msg-helper",
          }}
          inputProps={{
            "aria-describedby": "msg-helper",
            "aria-errormessage": formik.errors.msg ? "msg-helper" : undefined,
          }}
          sx={{
            color: "#666666",

            ".MuiOutlinedInput-notchedOutline": {
              border: "1px solid #858585",
              borderRadius: "0 !important",
            },
            ".MuiInputBase-root": {
              background: "#ffffff",
            },
          }}
        />
        <button
          className="w-full text-white p-[16px] bg-newPrimary h-[56px]"
          style={{
            lineHeight: 1.5,
          }}
          tabIndex={0}
          disabled={loading}
          type="submit"
          aria-label={send as string}
        >
          {loading ? (
            <CircularProgress
              size="28px"
              sx={{
                color: "white",
              }}
            />
          ) : (
            (send as string)
          )}
        </button>
      </div>
    </form>
  );
};
