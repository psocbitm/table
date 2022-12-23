import * as React from "react";
import InputComponent from "../components/InputComponent";
import TableComponent from "../components/TableComponent";
import { tableData } from "../tableData.js";
const IndexPage = () => {
  return (
    <>
      {/* <TableComponent tableData={tableData} /> */}
      <InputComponent
        borderRadius={"R8"}
        border={"B1"}
        shadow={"S1"}
        buttonBorderRadius={"R5"}
        disabled={false}
      />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
