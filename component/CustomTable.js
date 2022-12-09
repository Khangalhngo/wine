import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styles from "../styles/Home1.module.css";
const CustomTable = () => {
  const [wines, setWines] = useState([]);

  const getWines = async () => {
    const response = await axios.get("http://localhost:8080/api/all");
    setWines(response.data);
    console.log(wines);
  };
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
  const columns = [
    {
      name: "Wine name",
      selector: (row1) => row1.title,
      width: "150px",
      style: { "white-space": "unset" },
      wrap: true,
      sortable: true,
    },
    {
      name: "Point",
      selector: (row2) => row2.points,
      width: "75px",
      style: { overflowWrap: "break-word" },
      wrap: true,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row4) => row4.description,
      width: "280px",
      style: { overflowWrap: "break-word" },
      wrap: true,
    },
    {
      name: "Price",
      selector: (row4) => row4.price,
      width: "75px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Taster",
      selector: (row4) => row4.taster_name,
      width: "80px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Variety",
      selector: (row4) => row4.variety,
      width: "100px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Region",
      selector: (row4) => row4.region_1,
      width: "90px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Province",
      selector: (row4) => row4.province,
      width: "100px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row4) => row4.country,
      width: "95px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Winery",
      selector: (row4) => row4.winery,
      width: "90px",
      wrap: true,
      sortable: true,
    },
  ];
  useEffect(() => {
    getWines();
  }, []);
  const customSort = (rows, selector, direction) => {
    return rows.sort((row1, row2) => {
      // use the selector function to resolve your field names by passing the sort comparitors
      const aField = selector(row1);
      const bField = selector(row2);

      let comparison = 0;

      if (aField > bField) {
        comparison = 1;
      } else if (aField < bField) {
        comparison = -1;
      }

      return direction === "desc" ? comparison * -1 : comparison;
    });
  };
  return (
    <div className={styles.datatable}>
      <DataTable
        title="Wine Data Table"
        columns={columns}
        data={wines}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        sortFunction={customSort}
        pagination
      />
      {/* {wines?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        wines?.map((a) => (
          <li key={a.title}>
            <div>{a.title}</div>
          </li>
        ))
      )} */}
    </div>
  );
};

export default CustomTable;
