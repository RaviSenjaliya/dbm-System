import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React, { useState } from "react";
import FormDialog from "../material-kit/dialog/FormDialog";

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
    <div>
      <div className="">
        <FormDialog />
      </div>
      <div
        className="ag-theme-alpine "
        style={{ margin: "Auto", width: 410, height: 200 }}
      >
        <AgGridReact rowData={row} columnDefs={demo}></AgGridReact>
      </div>
    </div>
  );
};

export default Batch;
