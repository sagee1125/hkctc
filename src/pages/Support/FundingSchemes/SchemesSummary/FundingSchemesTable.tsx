import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
  const tableHeads = [
    "Scheme Name",
    "Objective",
    "Target Audience",
    "Funding Amount",
  ];
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
                <p className="text-body-s text-[#7E7E7E]">{head}</p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
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
                  className="text-body-s underline text-[#2F2F2F]"
                  href={row.schemeNameHyperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {row.schemeName}
                </a>
              </TableCell>
              <TableCell>
                <p className="text-body-s">{row.objective}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-s">{row.targetAudience}</p>
              </TableCell>
              <TableCell>
                <p className="text-highlight-s text-newPrimary">
                  {row.fundingAmount}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
