import * as React from "react";
import InputComponent from "../components/InputComponent";
import TableComponent from "../components/TableComponent";
import { tableData } from "../tableData";
const IndexPage = () => {
  return (
    <>
      <TableComponent tableData={tableData} />
      <InputComponent
        inputFieldRadius={"R8"}
        border={"B1"}
        buttonBorderRadius={"R5"}
        disabled={false}
        helperText={{
          text: "Helper Text",
          type: "",
        }}
      />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
