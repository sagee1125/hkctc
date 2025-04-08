import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Language, useSettings } from "../../../../context";

type TableBodyRow = {
  schemeName: string;
  schemeNameHyperLink: string;
  objective: string;
  targetAudience: string;
  fundingAmount: string;
};
type TableBodyProps = {
  rows: TableBodyRow[];
};

export const FundingSchemesTable: React.FC<TableBodyProps> = ({ rows }) => {
  const { language, getSingleText } = useSettings();

  const tableHeads =
    language === Language.EN
      ? ["Scheme Name", "Objective", "Target Audience", "Funding Amount"]
      : ["計劃名稱", "目標", "對像", "資助額"];
  return (
    <TableContainer component={"div"}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                borderBottom: "2px solid black",
              },
            }}
          >
            {tableHeads.map((head, index) => (
              <TableCell align="left" key={index}>
                <p className="text-body-s text-[#7E7E7E]">
                  {getSingleText(head, head)}
                </p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const { schemeName, objective, targetAudience, fundingAmount } =
              row;
            return (
              <TableRow
                key={index}
                sx={{
                  "& td": {
                    borderBottom: "1px dashed #C8CFD9",
                  },
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell>
                  <a
                    aria-label="link"
                    className="text-body-s underline text-[#000]"
                    href={row.schemeNameHyperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSingleText(schemeName, schemeName)}
                  </a>
                </TableCell>
                <TableCell>
                  <p className="text-body-s">
                    {getSingleText(objective, objective)}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-body-s">
                    {getSingleText(targetAudience, targetAudience)}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-highlight-s text-newPrimary">
                    {getSingleText(fundingAmount, fundingAmount)}
                  </p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
