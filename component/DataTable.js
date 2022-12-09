import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const DataTable = () => {
  const [wines, setWines] = useState([]);
  const getWines = async () => {
    const response = await axios.get("http://localhost:8080/api/all");
    setWines(response.data);
    console.log(wines);
  };
  useEffect(() => {
    getWines();
  }, []);

  return <div>DataTable</div>;
};

export default DataTable;
