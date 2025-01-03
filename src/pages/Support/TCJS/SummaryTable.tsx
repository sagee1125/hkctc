import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type TableBodyProps = {
  tableHeads: string[];
  tableRows: React.ReactNode[][];
};

export const SummaryTable: React.FC<TableBodyProps> = ({
  tableHeads,
  tableRows,
}) => {
  // const tableHeads = ["Service", "Coverage", "Duration", "Resulting Product"];
  // const tableRows = [
  //   [
  //     "Testing",
  //     "An object",
  //     "In general short term (applies only to the samples tested)",
  //     "Test report",
  //   ],
  //   [
  //     "Inspection",
  //     "Materials, Products; Installations; Plants; Processes; Work Procedures; Services",
  //     "In general short term (e.g. for a batch of products)",
  //     "Inspection report",
  //   ],
  //   [
  //     "Certification",
  //     "Management System; Products; Greenhouse Gas Assertions",
  //     "In general longer term (e.g. one-year)",
  //     "Certificate; Greenhouse gas validation and verification report",
  //   ],
  // ];

  return (
    <TableContainer
      component={"div"}
      sx={{
        border: "1px solid #E0E0E0",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          tableLayout: "fixed",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                borderBottom: "none",
              },
              bgcolor: "#EFEFEF",
            }}
          >
            {tableHeads.map((head, index) => (
              <TableCell
                align="left"
                key={index}
                sx={{
                  width: `${100 / tableHeads.length}%`,
                }}
              >
                <p className="text-highlight-m">{head}</p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "& td": {
                  borderBottom: "1px solid #E0E0E0",
                },
              }}
            >
              {row.map((cell, index) => (
                <TableCell
                  key={index}
                  sx={{
                    width: `${100 / tableHeads.length}%`,
                    textAlign: "left",
                    verticalAlign: "top",
                  }}
                >
                  <p className="text-body-m">{cell}</p>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
