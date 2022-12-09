import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import BackButton from "./BackButton";
const RangeSearch = () => {
  const router = useRouter();
  const data = router.query["data"];
  const min = router.query["Min"];
  const max = router.query["Max"];
  const [filteredData, setFilteredData] = useState("");
  const [wines, setWines] = useState([]);
  const getWines = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/search?=${data}`
    );
    setWines(response.data);
  };
  useEffect(() => {
    getWines();
  }, []);

  console.log(typeof data);

  const filteredValue = wines.filter((items) => {
    return items[data] >= min && items[data] <= max;
  });

  const titlee = `You are searched ${min} to ${max} range of ${data} `;
  console.log(`filtered ${filteredData}`);
  //   useEffect(() => {
  //     fetch(`http://localhost:8080/api/search?${data}=${value}`)
  //       .then((data) => data.json())
  //       .then((json) => {
  //         setItems(json);
  //         console.log(json);
  //       });
  //   }, []);

  const columns = [
    {
      name: "Wine name",
      selector: (row1) => row1.title,
      width: "200px",
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
      width: "300px",
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
      width: "100px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Region",
      selector: (row4) => row4.region_1,
      width: "100px",
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
      width: "100px",
      wrap: true,
      sortable: true,
    },
    {
      name: "Winery",
      selector: (row4) => row4.winery,
      width: "100px",
      wrap: true,
      sortable: true,
    },
  ];

  return (
    <div className={styles.datatable}>
      <BackButton />
      <DataTable
        title={titlee}
        columns={columns}
        data={filteredValue}
        pagination
      />
    </div>
  );
};

export default RangeSearch;
