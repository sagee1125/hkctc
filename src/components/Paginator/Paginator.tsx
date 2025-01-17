import React from "react";
import { Pagination } from "@mui/material";

type PaginatorProps = {
  count: number;
  page: number;
};

export const Paginator: React.FC<PaginatorProps> = (props: PaginatorProps) => {
  const { count, page } = props;
  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#233F55",
          color: "white",
        },
        "& .MuiPaginationItem-root.Mui-selected:hover": {
          backgroundColor: "#233F55",
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "#ffffff",
        },
      }}
      count={count}
      page={page}
      variant="outlined"
      shape="rounded"
    />
  );
};
