import React, { useState } from "react";
import { useExpanded, useTable } from "react-table";
import "./TableComponent.css";
const tableData = [
  {
    projectName: "Lodha Amara - Tower 1-5, 7-19",
    projectAddress: "Ghatkopar E, Mumbai - 400098",
    projectType: "Residential",
    totalCarpetArea: "2,75,000",
  },
  {
    projectName: "Runwal Bliss Amara - Tower A, E-F-X24-29",
    projectAddress: "Kanjurmarg E, Mumbai - 400098",
    projectType: "Residential",
    totalCarpetArea: "6,59,412",
  },
];
// This could be inlined into SubRowAsync, this this lets you reuse it across tables
function SubRows({ row, rowProps, visibleColumns, tableData }) {
  return (
    <>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
}

function Table({ columns: userColumns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded // We can useExpanded to track the expanded state
    // for sub components too!
  );

  return (
    <>
      <table {...getTableProps()}>
        <colgroup className="col-group">
          <col className="col col1" />
          <col className="col col2" />
          <col className="col col3" />
          <col className="col col4" />
          <col className="col col5" />
        </colgroup>
        <thead className="thead">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="thead-row">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="thead-row-header">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="tbody">
          {rows.map((row, i) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment key={rowProps.key}>
                <tr {...rowProps} className="tbody-row">
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {/* We could pass anything into this */}
                {row.isExpanded &&
                  renderRowSubComponent({ row, rowProps, visibleColumns })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function TableComponent() {
  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? (
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.169473 0.169473C0.223058 0.115752 0.286715 0.0731306 0.356797 0.0440496C0.426879 0.0149687 0.50201 0 0.577887 0C0.653763 0 0.728894 0.0149687 0.798977 0.0440496C0.869059 0.0731306 0.932715 0.115752 0.9863 0.169473L7.50015 6.68448L14.014 0.169473C14.0676 0.115839 14.1313 0.0732943 14.2014 0.044268C14.2715 0.0152417 14.3466 0.000302023 14.4224 0.000302023C14.4983 0.000302023 14.5734 0.0152417 14.6434 0.044268C14.7135 0.0732943 14.7772 0.115839 14.8308 0.169473C14.8845 0.223106 14.927 0.286778 14.956 0.356854C14.9851 0.42693 15 0.502037 15 0.577886C15 0.653736 14.9851 0.728843 14.956 0.798918C14.927 0.868994 14.8845 0.932666 14.8308 0.9863L7.90857 7.90856C7.85498 7.96229 7.79132 8.00491 7.72124 8.03399C7.65116 8.06307 7.57603 8.07804 7.50015 8.07804C7.42427 8.07804 7.34914 8.06307 7.27906 8.03399C7.20898 8.00491 7.14532 7.96229 7.09174 7.90856L0.169473 0.9863C0.115753 0.932715 0.0731311 0.869058 0.0440502 0.798976C0.0149692 0.728894 0 0.653763 0 0.577886C0 0.50201 0.0149692 0.426879 0.0440502 0.356796C0.0731311 0.286714 0.115753 0.223057 0.169473 0.169473Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.169473 0.169473C0.223057 0.115753 0.286714 0.0731311 0.356796 0.0440502C0.426879 0.0149692 0.50201 0 0.577886 0C0.653763 0 0.728894 0.0149692 0.798976 0.0440502C0.869058 0.0731311 0.932715 0.115753 0.9863 0.169473L7.90856 7.09174C7.96229 7.14532 8.00491 7.20898 8.03399 7.27906C8.06307 7.34914 8.07804 7.42427 8.07804 7.50015C8.07804 7.57603 8.06307 7.65116 8.03399 7.72124C8.00491 7.79132 7.96229 7.85498 7.90856 7.90857L0.9863 14.8308C0.877982 14.9391 0.731071 15 0.577886 15C0.424702 15 0.277791 14.9391 0.169473 14.8308C0.0611546 14.7225 0.000302023 14.5756 0.000302023 14.4224C0.000302023 14.2692 0.0611546 14.1223 0.169473 14.014L6.68448 7.50015L0.169473 0.9863C0.115752 0.932715 0.0731306 0.869059 0.0440496 0.798977C0.0149687 0.728894 0 0.653763 0 0.577887C0 0.50201 0.0149687 0.426879 0.0440496 0.356797C0.0731306 0.286715 0.115752 0.223058 0.169473 0.169473Z"
                  fill="black"
                />
              </svg>
            )}
          </span>
        ),
        // We can override the cell renderer with a SubCell to be used with an expanded row
        SubCell: () => null, // No expander on an expanded row
      },
      {
        Header: "Project Name",
        accessor: (d) => d.projectName,
        SubCell: (cellProps) => <>🥳 {cellProps.value} 🎉</>,
      },
      {
        Header: "Project Address",
        accessor: (d) => d.projectAddress,
      },
      {
        Header: "Project Type",
        accessor: (d) => d.projectType,
      },
      {
        Header: "Total Carpet Area(sqft.)",
        accessor: (d) => d.totalCarpetArea,
      },
    ],
    []
  );

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row, rowProps, visibleColumns }) => (
      <SubRows
        row={row}
        rowProps={rowProps}
        visibleColumns={visibleColumns}
        data={tableData}
      />
    ),
    []
  );

  return (
    <Table
      columns={columns}
      data={tableData}
      // We added this as a prop for our table component
      // Remember, this is not part of the React Table API,
      // it's merely a rendering option we created for
      // ourselves
      renderRowSubComponent={renderRowSubComponent}
    />
  );
}

export default TableComponent;
