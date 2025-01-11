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
