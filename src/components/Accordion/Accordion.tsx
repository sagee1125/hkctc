import React from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSettings } from "../../context";

type AccordionProps = {
  title: string;
  defaultExpanded?: boolean;
  details: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({
  title,
  details,
  defaultExpanded = false, // All the menu should be collapsed initially
}) => {
  const { isPC } = useSettings();

  return (
    <div>
      <MuiAccordion
        elevation={0}
        disableGutters
        defaultExpanded={defaultExpanded}
        sx={{
          padding: "0 !important",
          margin: "0 !important",
          borderRadius: 0,
          border: `1px solid #E0E0E0`,
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&::before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            padding: "24px",
            margin: "0 !important",
            "& .MuiAccordionSummary-content": {
              margin: "0 !important",
            },
          }}
          aria-labe={title}
        >
          {/* TODO tbc */}
          <div className={`!text-highlight-${isPC ? "m" : "m"} !pr-[24px]`}>
            {title}
          </div>
        </AccordionSummary>
        <div className="mx-[24px]">
          <hr
            style={{
              color: "#E0E0E0",
            }}
          />
        </div>
        <AccordionDetails
          aria-labe={"Details of " + title}
          sx={{
            padding: "16px 24px 24px 24px !important",
          }}
          className="text-justify"
        >
          {details}
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export const NormalAccordion: React.FC<AccordionProps> = ({
  title,
  details,
}) => {
  return (
    <MuiAccordion
      sx={{
        ":before": { display: "none" },
        boxShadow: "none",
        ".MuiButtonBase-root": { minHeight: "0px !important" },
        ".MuiAccordionSummary-content": {
          margin: "0 !important",
        },
      }}
      defaultExpanded
    >
      <AccordionSummary
        sx={{
          width: "auto",
          padding: 0,
          marginBottom: "10px",
        }}
        expandIcon={<ExpandMoreIcon className="text-[#000000]" />}
      >
        <span className="mr-[8px] text-highlight-m">{title}</span>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
        }}
      >
        {details}
      </AccordionDetails>
    </MuiAccordion>
  );
};
