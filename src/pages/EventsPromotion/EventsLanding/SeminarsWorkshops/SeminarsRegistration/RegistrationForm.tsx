import React, { SyntheticEvent } from "react";
import { useFormik } from "formik";
import { RadioGroup } from "@mui/material";
import { object, string, boolean } from "yup";
import {
  industryOptions,
  knowSeminarWays,
  INDUSTRY_TYPE,
  KNOW_SEMINAR_WAY,
  countryList,
} from "./constants";
import { Button, Link } from "../../../../../components";
import { TextField } from "../../../../../components/TextField/TextField";
import { Radio } from "../../../../../components/Radio/Radio";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import { Select } from "../../../../../components/Select/Select";
import { handleReadySubmit } from "../../../../../utils";
import { useSettings } from "../../../../../context";

type RegistrationFormData = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  verifyEmail: string;
  position: string;
  organization: string;
  telephoneNumber: string;
  country: string;
  attendanceCertificate: string;
  fullNameAttendanceCertificate: string;
  industry: string;
  otherIndustry: string;
  aboutSeminar: string[];
  otherAboutSeminar: string;
  receiveInfoAgreement?: boolean;
};

export const RegistrationForm: React.FC = () => {
  const infoDisplay = [
    {
      en_title: "Date",
      en_content: "14 October 2024 (Thursday)",
      cn_title: "日期",
      cn_content: "2024年4⽉11⽇ (星期四)",
    },
    {
      en_title: "Time",
      en_content: "2:30 p.m. to 5:00 p.m. (including Q&A)",
      cn_title: "時間",
      cn_content: "下午二時三十分至下午五時 (包括問答環節)",
    },
    {
      en_title: "Venue",
      en_content: "Kowloon, Hong Kong",
      cn_title: "地點",
      cn_content: "香港九⿓上海街555號康得思酒店7樓宴會廳 (包括問答環節)",
    },
    {
      en_title: "Language",
      en_content: "Cantonese (presentation slides may be in English only)",
      cn_title: "語言",
      cn_content: "廣東話 (投影片或只以英語顯示)",
    },
  ];

  const { processText } = useSettings();

  const registrationFormik = useFormik<RegistrationFormData>({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      verifyEmail: "",
      position: "",
      organization: "",
      telephoneNumber: "",
      country: "",
      attendanceCertificate: "",
      fullNameAttendanceCertificate: "",
      industry: "",
      otherIndustry: "",
      aboutSeminar: [],
      otherAboutSeminar: "",
      receiveInfoAgreement: undefined,
    },
    validationSchema: object({
      title: string().required("Please enter the Title"),
      firstName: string().required("Please enter the First Name"),
      lastName: string().required("Please enter the Last Name"),
      email: string().required("Please enter the Email Address"),
      verifyEmail: string().required("Please enter the Verify Email Address"),
      telephoneNumber: string().required("Please enter the Telephone No."),
      attendanceCertificate: string().required(
        "Please enter the Attendance Certificate"
      ),
      receiveInfoAgreement: boolean().required(),
    }),
    // TODO: will start once backend database is finished
    onSubmit: () => {},
  });

  const handleChangeIndustry = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    await registrationFormik.setFieldValue("industry", event.target.value);
  };

  const handleChangeAboutSeminar =
    (value: string) =>
    async (
      event: SyntheticEvent<Element, Event>,
      checked: boolean
    ): Promise<void> => {
      if (checked) {
        await registrationFormik.setFieldValue("aboutSeminar", [
          ...registrationFormik.values.aboutSeminar,
          value,
        ]);
      } else {
        await registrationFormik.setFieldValue(
          "aboutSeminar",
          registrationFormik.values.aboutSeminar.filter(
            (item) => item !== value
          )
        );
      }
    };

  const handleChangeAgreement = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    await registrationFormik.setFieldValue(
      "receiveInfoAgreement",
      event.target.value === "true"
    );
  };

  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div>
        <p className="text-highlight-s text-[#666666]">Join New Seminar</p>
        <p className="text-heading-l" aria-level={10} role="heading">
          XXX Seminar - Registration
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        {infoDisplay.map((item) => {
          return (
            <div>
              <div className="flex flex-row gap-[5px]">
                <span className="text-highlight-m">{item.en_title}</span>
                <span>{item.en_content}</span>
              </div>
              <div className="flex flex-row gap-[5px]">
                <span className="text-highlight-m">
                  {processText(item.cn_title)}
                </span>
                <span>{processText(item.cn_content)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <span className="italic">* Required Information</span>{" "}
        {processText("必填欄位")}
      </div>

      <form
        onSubmit={handleReadySubmit(registrationFormik)}
        noValidate
        className="flex flex-col gap-[24px]"
      >
        <div className="flex flex-col gap-[16px]">
          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <div className="text-highlight-m mb-[8px]">
                Title {processText("稱謂")}*
              </div>
              <TextField
                name="title"
                label="Title"
                aria-label="title"
                required
                aria-required="true"
                id="title-input"
                FormHelperTextProps={{
                  id: "title-helper",
                }}
                inputProps={{
                  "aria-describedby": "title-helper",
                  "aria-errormessage": registrationFormik.errors.title
                    ? "title-helper"
                    : undefined,
                  autoComplete: "title",
                  "aria-label": "title input",
                }}
                value={registrationFormik.values.title}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.title &&
                  Boolean(registrationFormik.errors.title)
                }
                helperText={
                  Boolean(registrationFormik.touched.title) &&
                  registrationFormik.errors.title
                }
                fullWidth
              />
            </div>
            <div />
            <div>
              <div className="text-highlight-m mb-[8px]">
                First Name {processText("名字")}*
              </div>
              <TextField
                name="firstName"
                aria-label="firstName"
                required
                label="First Name"
                aria-required="true"
                id="firstName-input"
                FormHelperTextProps={{
                  id: "firstName-helper",
                }}
                inputProps={{
                  "aria-describedby": "firstName-helper",
                  "aria-errormessage": registrationFormik.errors.firstName
                    ? "firstName-helper"
                    : undefined,
                  autoComplete: "firstName",
                  "aria-label": "firstName input",
                }}
                value={registrationFormik.values.firstName}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.firstName &&
                  Boolean(registrationFormik.errors.firstName)
                }
                helperText={
                  registrationFormik.touched.firstName &&
                  registrationFormik.errors.firstName
                }
                fullWidth
              />
            </div>

            <div>
              <div className="text-highlight-m mb-[8px]">
                Last Name {processText("姓氏")}*
              </div>
              <TextField
                name="lastName"
                aria-label="lastName"
                label="LastName"
                required
                aria-required="true"
                id="lastName-input"
                FormHelperTextProps={{
                  id: "lastName-helper",
                }}
                inputProps={{
                  "aria-describedby": "lastName-helper",
                  "aria-errormessage": registrationFormik.errors.lastName
                    ? "lastName-helper"
                    : undefined,
                  autoComplete: "lastName",
                  "aria-label": "lastName input",
                }}
                value={registrationFormik.values.lastName}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.lastName &&
                  Boolean(registrationFormik.errors.lastName)
                }
                helperText={
                  registrationFormik.touched.lastName &&
                  registrationFormik.errors.lastName
                }
                fullWidth
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <div className="text-highlight-m mb-[8px]">
                Email Address {processText("電郵地址")}*
              </div>
              <TextField
                name="email"
                label="Email"
                aria-label="email"
                required
                aria-required="true"
                id="email-input"
                FormHelperTextProps={{
                  id: "email-helper",
                }}
                inputProps={{
                  "aria-describedby": "email-helper",
                  "aria-errormessage": registrationFormik.errors.email
                    ? "email-helper"
                    : undefined,
                  autoComplete: "email",
                  "aria-label": "email input",
                }}
                value={registrationFormik.values.email}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.email &&
                  Boolean(registrationFormik.errors.email)
                }
                helperText={
                  registrationFormik.touched.email &&
                  registrationFormik.errors.email
                }
                fullWidth
              />
            </div>

            <div>
              <div className="text-highlight-m mb-[8px]">
                Verify Email Address {processText("確認電郵地址")}*
              </div>
              <TextField
                name="verifyEmail"
                aria-label="verifyEmail"
                label="Verify Email"
                required
                aria-required="true"
                id="verifyEmail-input"
                FormHelperTextProps={{
                  id: "verifyEmail-helper",
                }}
                inputProps={{
                  "aria-describedby": "verifyEmail-helper",
                  "aria-errormessage": registrationFormik.errors.verifyEmail
                    ? "verifyEmail-helper"
                    : undefined,
                  autoComplete: "off",
                  "aria-label": "verifyEmail input",
                }}
                value={registrationFormik.values.verifyEmail}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.verifyEmail &&
                  Boolean(registrationFormik.errors.verifyEmail)
                }
                helperText={
                  registrationFormik.touched.verifyEmail &&
                  registrationFormik.errors.verifyEmail
                }
                fullWidth
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <div className="text-highlight-m mb-[8px]">
                Position {processText("職位")}
              </div>
              <TextField
                label="Position"
                name="position"
                aria-label="position"
                required
                aria-required="true"
                id="position-input"
                FormHelperTextProps={{
                  id: "position-helper",
                }}
                inputProps={{
                  "aria-describedby": "position-helper",
                  "aria-errormessage": registrationFormik.errors.position
                    ? "position-helper"
                    : undefined,
                  autoComplete: "position",
                  "aria-label": "position input",
                }}
                value={registrationFormik.values.position}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.position &&
                  Boolean(registrationFormik.errors.position)
                }
                helperText={
                  registrationFormik.touched.position &&
                  registrationFormik.errors.position
                }
                fullWidth
              />
            </div>

            <div>
              <div className="text-highlight-m mb-[8px]">
                Organisation {processText("機構")}
              </div>
              <TextField
                name="organization"
                label="Organization"
                aria-label="organization"
                required
                aria-required="true"
                id="organization-input"
                FormHelperTextProps={{
                  id: "organization-helper",
                }}
                inputProps={{
                  "aria-describedby": "organization-helper",
                  "aria-errormessage": registrationFormik.errors.organization
                    ? "organization-helper"
                    : undefined,
                  autoComplete: "organization",
                  "aria-label": "organization input",
                }}
                value={registrationFormik.values.organization}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.organization &&
                  Boolean(registrationFormik.errors.organization)
                }
                helperText={
                  registrationFormik.touched.organization &&
                  registrationFormik.errors.organization
                }
                fullWidth
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <div className="text-highlight-m mb-[8px]">
                Telephone No. {processText("電話號碼")}*
              </div>
              <TextField
                name="telephoneNumber"
                aria-label="telephoneNumber"
                label="TelephoneNumber"
                required
                aria-required="true"
                id="telephoneNumber-input"
                FormHelperTextProps={{
                  id: "telephoneNumber-helper",
                }}
                inputProps={{
                  "aria-describedby": "telephoneNumber-helper",
                  "aria-errormessage": registrationFormik.errors.telephoneNumber
                    ? "telephoneNumber-helper"
                    : undefined,
                  autoComplete: "telephoneNumber",
                  "aria-label": "telephoneNumber input",
                }}
                value={registrationFormik.values.telephoneNumber}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.telephoneNumber &&
                  Boolean(registrationFormik.errors.telephoneNumber)
                }
                helperText={
                  registrationFormik.touched.telephoneNumber &&
                  registrationFormik.errors.telephoneNumber
                }
                fullWidth
              />
            </div>

            <div>
              <div className="text-highlight-m mb-[8px]">
                Country/Region {processText("國家/地區")}
              </div>
              <Select
                name="country"
                label="Country"
                aria-label="country"
                required
                role="option"
                id="country-input"
                FormHelperTextProps={{
                  id: "country-helper",
                }}
                inputProps={{
                  "aria-describedby": "country-helper",
                  "aria-errormessage": registrationFormik.errors.country
                    ? "country-helper"
                    : undefined,
                  autoComplete: "country",
                  "aria-label": "Country input",
                }}
                options={countryList}
                value={registrationFormik.values.country}
                onChange={registrationFormik.handleChange}
                onBlur={registrationFormik.handleBlur}
                error={
                  registrationFormik.touched.country &&
                  Boolean(registrationFormik.errors.country)
                }
                helperText={
                  registrationFormik.touched.country &&
                  registrationFormik.errors.country
                }
                fullWidth
              />
            </div>

            <div className="col-span-2">
              <p className="text-highlight-m mb-[8px]">
                Attendance Certificate {processText("出席證明書")}*
              </p>
              <div className="w-1/2 pr-[12px]">
                <Select
                  label="AttendanceCertificate"
                  name="attendanceCertificate"
                  aria-label="attendanceCertificate"
                  required
                  aria-required="true"
                  id="attendanceCertificate-input"
                  FormHelperTextProps={{
                    id: "attendanceCertificate-helper",
                  }}
                  inputProps={{
                    "aria-describedby": "attendanceCertificate-helper",
                    "aria-errormessage": registrationFormik.errors
                      .attendanceCertificate
                      ? "attendanceCertificate-helper"
                      : undefined,
                    autoComplete: "attendanceCertificate",
                    "aria-label": "AttendanceCertificate input",
                  }}
                  value={registrationFormik.values.attendanceCertificate}
                  options={[]}
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                  error={
                    registrationFormik.touched.attendanceCertificate &&
                    Boolean(registrationFormik.errors.attendanceCertificate)
                  }
                  helperText={
                    registrationFormik.touched.attendanceCertificate &&
                    registrationFormik.errors.attendanceCertificate
                  }
                  fullWidth
                />
              </div>
            </div>

            <div className="col-span-2">
              <p className="text-highlight-m mb-[8px]">
                Full Name for Attendance Certificate (In English only)
                {processText("出席證明書所載的英文全名")}
              </p>
              <div className="w-1/2 pr-[12px]">
                <TextField
                  label="Full Name Attendance Certificate"
                  name="fullNameAttendanceCertificate"
                  required
                  aria-required="true"
                  aria-label="fullNameAttendanceCertificate"
                  id="fullNameAttendanceCertificate-input"
                  FormHelperTextProps={{
                    id: "fullNameAttendanceCertificate-helper",
                  }}
                  inputProps={{
                    "aria-describedby": "fullNameAttendanceCertificate-helper",
                    "aria-errormessage": registrationFormik.errors
                      .fullNameAttendanceCertificate
                      ? "fullNameAttendanceCertificate-helper"
                      : undefined,
                    autoComplete: "fullNameAttendanceCertificate",
                    "aria-label": "Full Name Attendance Certificate input",
                  }}
                  value={
                    registrationFormik.values.fullNameAttendanceCertificate
                  }
                  onChange={registrationFormik.handleChange}
                  onBlur={registrationFormik.handleBlur}
                  error={
                    registrationFormik.touched.fullNameAttendanceCertificate &&
                    Boolean(
                      registrationFormik.errors.fullNameAttendanceCertificate
                    )
                  }
                  helperText={
                    registrationFormik.touched.fullNameAttendanceCertificate &&
                    registrationFormik.errors.fullNameAttendanceCertificate
                  }
                  fullWidth
                />
              </div>
            </div>

            <div />
          </div>

          <div className="flex flex-col gap-[8px] w-full">
            <div>
              Certificate will be issued via Email{" "}
              {processText("證明書會以電郵方式發出")}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <p className="text-highlight-m" id="industryLabel">
            Type of Industry {processText("行業")}
          </p>
          <RadioGroup
            name="industry"
            value={registrationFormik.values.industry}
            aria-label="industry"
            onChange={handleChangeIndustry}
            role="radiogroup"
            aria-labelledby="industryLabel"
            tabIndex={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {industryOptions.map((item) => {
              return (
                <div className="flex flex-row">
                  <Radio
                    tabIndex={0}
                    role="radio"
                    value={item.value}
                    aria-checked={
                      registrationFormik.values.industry === item.value
                    }
                    aria-labelledby={`${item.label as string}Label`}
                    label={
                      <span id={`${item.label as string}Label`}>
                        {processText(item.label as string)}
                      </span>
                    }
                    onChange={registrationFormik.handleChange}
                    checked={registrationFormik.values.industry === item.value}
                  />
                  {item.value === INDUSTRY_TYPE.OTHERS && (
                    <div className="w-[419px]">
                      <TextField
                        name="otherIndustry"
                        required
                        tabIndex={0}
                        label="Other Industry"
                        aria-required="true"
                        aria-label="otherIndustry"
                        id="otherIndustry-input"
                        FormHelperTextProps={{
                          id: "otherIndustry-helper",
                        }}
                        inputProps={{
                          "aria-describedby": "otherIndustry-helper",
                          "aria-errormessage": registrationFormik.errors
                            .otherIndustry
                            ? "otherIndustry-helper"
                            : undefined,
                          autoComplete: "off",
                          "aria-label": "Other Industry input",
                        }}
                        value={registrationFormik.values.otherIndustry}
                        onChange={registrationFormik.handleChange}
                        onBlur={registrationFormik.handleBlur}
                        error={
                          registrationFormik.touched.otherIndustry &&
                          Boolean(registrationFormik.errors.otherIndustry)
                        }
                        helperText={
                          registrationFormik.touched.otherIndustry &&
                          registrationFormik.errors.otherIndustry
                        }
                        fullWidth
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-[16px]">
          <p className="text-highlight-m" id="aboutSeminarLabel">
            How did you know about this Seminar? (Can choose more than one)
            <br />
            {processText("您如何知道這次研討會? (可以選擇多個)")}
          </p>
          <div className="flex flex-row flex-wrap">
            {knowSeminarWays.map((item) => {
              return (
                <div className="flex flex-row">
                  <Checkbox
                    name="aboutSeminar"
                    tabIndex={0}
                    role="checkbox"
                    aria-label="About Seminar"
                    aria-labelledby="aboutSeminarLabel"
                    aria-checked={registrationFormik.values.aboutSeminar.includes(
                      item.value as string
                    )}
                    value={registrationFormik.values.aboutSeminar.includes(
                      item.value as string
                    )}
                    label={item.label}
                    onChange={handleChangeAboutSeminar(item.value as string)}
                    checked={registrationFormik.values.aboutSeminar.includes(
                      item.value as string
                    )}
                  />
                  {item.value === KNOW_SEMINAR_WAY.OTHERS && (
                    <div className="w-[400px]">
                      <TextField
                        name="otherIndustry"
                        required
                        label="Other Industry"
                        aria-required="true"
                        aria-label="otherIndustry"
                        id="otherIndustry-input"
                        FormHelperTextProps={{
                          id: "otherIndustry-helper",
                        }}
                        inputProps={{
                          "aria-describedby": "otherIndustry-helper",
                          "aria-errormessage": registrationFormik.errors
                            .otherIndustry
                            ? "otherIndustry-helper"
                            : undefined,
                          autoComplete: "off",
                          "aria-label": "Other Industry input",
                        }}
                        value={registrationFormik.values.otherAboutSeminar}
                        onChange={registrationFormik.handleChange}
                        onBlur={registrationFormik.handleBlur}
                        error={
                          registrationFormik.touched.otherAboutSeminar &&
                          Boolean(registrationFormik.errors.otherAboutSeminar)
                        }
                        helperText={
                          registrationFormik.touched.otherAboutSeminar &&
                          registrationFormik.errors.otherAboutSeminar
                        }
                        fullWidth
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-highlight-m" id="receiveInfoAgreementLabel">
            *I agree to receive information from HKCTC, for example, news of
            seminar activities, e-newsletter, etc. <br />*
            {processText(
              "本人願意接收香港檢測和認證局的資訊，例如研討會活動消息、電子通訊等"
            )}
          </p>
          <RadioGroup
            name="receiveInfoAgreement"
            aria-label="receiveInfoAgreement"
            aria-labelledby="receiveInfoAgreementLabel"
            value={registrationFormik.values.receiveInfoAgreement}
            onChange={handleChangeAgreement}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Radio
              value={true}
              label={<span id="agreeLabel">Agree 同意</span>}
              tabIndex={0}
              role="radio"
              aria-labelledby="agreeLabel"
              aria-checked={
                registrationFormik.values.receiveInfoAgreement === true
              }
              onChange={registrationFormik.handleChange}
              checked={registrationFormik.values.receiveInfoAgreement === true}
              error={
                registrationFormik.touched.receiveInfoAgreement &&
                Boolean(registrationFormik.errors.receiveInfoAgreement)
              }
              inputProps={{
                autoComplete: "off",
                "aria-label": "Agree Tick",
                "aria-describedby": "receiveInfoAgreementError",
                "aria-invalid": Boolean(
                  registrationFormik.errors.receiveInfoAgreement
                ),
              }}
            />
            <Radio
              value={false}
              label={<span id="disagreeLabel">Disagree 不同意"</span>}
              tabIndex={0}
              role="radio"
              aria-checked={
                registrationFormik.values.receiveInfoAgreement === false
              }
              aria-labelledby="disagreeLabel"
              onChange={registrationFormik.handleChange}
              checked={registrationFormik.values.receiveInfoAgreement === false}
              error={
                registrationFormik.touched.receiveInfoAgreement &&
                Boolean(registrationFormik.errors.receiveInfoAgreement)
              }
              inputProps={{
                autoComplete: "off",
                "aria-label": "Disagree Tick",
                "aria-describedby": "receiveInfoAgreementError", // 共用同一個錯誤提示
                "aria-invalid": Boolean(
                  registrationFormik.errors.receiveInfoAgreement
                ),
              }}
            />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-highlight-m">
            Statement of Purpose for the Collection of Personal Data:
          </p>
          <div className="flex flex-col gap-[16px]">
            <div>
              Your personal data will be used by the HKCTC, its Secretariat
              and/or its agent for one or more of the following purposes:
            </div>
            <div className="flex flex-col gap-[16px]">
              <div>
                1. To process registration of the captioned seminar and other
                related purposes;
              </div>
              <div>
                2. For statistics and research purpose on the condition that the
                resulting statistics or results of the research will not be made
                available in a form which will identify the data subjects or any
                of them;
              </div>
              <div>
                3. any other legitimate purposes as may be required, authorized
                or permitted by law.
              </div>
            </div>
            <div>
              The data subject has a right to request access to and correction
              of his/her personal data as provided in sections 18 and 22 and
              Principle 6 of Schedule 1 of the Personal Data (Privacy) Ordinance
              (Chapter 486). The data subject’s right of access includes the
              right to obtain a copy of his/her personal data provided subject
              to payment of a fee. Enquiry concerning the personal data
              collected, including the making of access and correction, should
              be addressed to HKCTC Secretariat at
            </div>
          </div>

          <div>
            Address: Units 801-04, 8/F, The Hub, 23 Yip Kan Street, Wong Chuk
            Hang, Hong Kong <br />
            <br />
            Fax: 3691 8655 <br />
            <br />
            Email: <Link>enquiry@hkctc.gov.hk</Link>
          </div>
        </div>

        <div className="w-full">
          <Button
            variant="contained"
            aria-label="submit"
            tabIndex={0}
            role="button"
            type="submit"
            sx={{
              textTransform: "none",
              width: "100%",
              backgroundColor: "#233f55",
              padding: "16px",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "22px",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
