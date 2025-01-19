import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type ListProps = {
  title: React.ReactNode;
  rowData: React.ReactNode[];
};

export const List: React.FC<ListProps> = ({ title, rowData }) => {
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
              bgcolor: "#F7F7F5",
              height: "70px",
            }}
          >
            {title}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "& td": {
                  borderBottom: "1px solid #E0E0E0",
                },
                bgcolor: index % 2 === 0 ? "white" : "#F7F7F5",
                height: "70px",
              }}
            >
              {row}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
