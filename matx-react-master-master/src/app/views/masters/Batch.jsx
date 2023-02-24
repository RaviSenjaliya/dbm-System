import { AgGridReact } from "ag-grid-react";
import Breadcrumb from "app/components/Breadcrumb";
import { Box, styled, useTheme } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import SimpleCard from "app/components/SimpleCard";
import React, { useState } from "react";
import FormDialog from "../material-kit/dialog/FormDialog";
import UserTable from "./BatchComp/UserTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Batch = () => {
  const [demo, setdemo] = useState([
    { field: "id", filter: true },
    { field: "name" },
  ]);

  const row = [
    { id: 1, name: "Akhil" },
    { id: 2, name: "Jay" },
  ];
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Master", path: "" }, { name: "Batch" }]}
        />
      </Box>

      <FormDialog />
      <br />
      <SimpleCard title="User Table">
        <UserTable />
        {/* <div
          className="ag-theme-alpine "
          style={{ margin: "Auto", width: 410, height: 200 }}
        >
          <AgGridReact rowData={row} columnDefs={demo}></AgGridReact>
        </div> */}
      </SimpleCard>
    </Container>
  );
};

export default Batch;
