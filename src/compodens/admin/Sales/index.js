import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BarChart } from "@mui/x-charts/BarChart";
import { fetchSalesData, fetchCategorySalesData } from "./api";
import classnames from "classnames/bind";
import styles from "./Sales-module.scss";

const cx = classnames.bind(styles);

export default function BiaxialBarChart() {
  const [revenueData, setRevenueData] = useState([]);
  const [xLabels, setXLabels] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2020");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const salesData = await fetchSalesData(selectedYear);
        setRevenueData(salesData.map((item) => item.revenue));
        setXLabels(salesData.map((item) => item.month));

        const categorySalesData = await fetchCategorySalesData(selectedYear);
        setCategoryData(categorySalesData);
      } catch (error) {
        console.error("Error loading sales data:", error);
      }
    };

    getData();
  }, [selectedYear]);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const categories = categoryData.map((item) => item.category);
  const counts = categoryData.map((item) => item.count);

  return (
    <div className={cx("Sales")}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel sx={{ width: 150 }} id="year-select-label">
            Year
          </InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={selectedYear}
            label="Year"
            sx={{ width: 200 }}
            onChange={handleChange}
          >
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
          </Select>
        </FormControl>
        {/* sales_barchar  */}
        <div className={cx("Sales_barchart")}>
          <BarChart
            width={600}
            height={400}
            series={[
              {
                data: revenueData,
                label: "Doanh thu",
                yAxisKey: "leftAxisId",
              },
            ]}
            xAxis={[
              {
                data: xLabels,
                scaleType: "band",
              },
            ]}
            yAxis={[{ id: "leftAxisId" }]}
          />
        </div>
        {/* category_revenue_barchart */}
        <div className={cx("Category_revenue_barchart")}>
          <BarChart
            width={600}
            height={350}
            series={[
              {
                data: counts,
                label: "Doanh thu theo thể loại",
              },
            ]}
            xAxis={[
              {
                data: categories,
                scaleType: "band",
              },
            ]}
          />
        </div>
      </Box>
    </div>
  );
}
