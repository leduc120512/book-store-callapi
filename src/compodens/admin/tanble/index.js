import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Customers from "./customers";
function toLowerCaseNonAccentVietnamese(str) {
  str = str.toLowerCase();
  //     We can also use this instead of from line 11 to line 17
  //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
  //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
  //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
  //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
  //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
  //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
  //     str = str.replace(/\u0111/g, "d");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

export default function ShowProject() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [employses, setEmployse] = useState([]);

  // Fetch dữ liệu từ JSON server
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setEmployse(data);
        setData(data);
        setFilter(data);
      });
  }, []);

  // Cập nhật dữ liệu sau khi chỉnh sửa
  function onUpdateEmployse(updateEmployse) {
    const updatedEmployses = employses.map((employse) =>
      employse.id === updateEmployse.id ? updateEmployse : employse
    );
    setEmployse(updatedEmployses);
    setData(updatedEmployses);
  }

  // Hàm xóa dữ liệu
  const removeData = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const updatedData = data.filter((row) => row.id !== id);
          setData(updatedData);
          setFilter(updatedData);
        }
      })
      .catch((error) => console.error("Error deleting item!", error));
  };

  // Hàm tìm kiếm
  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter(
      (row) =>
        row.email?.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.id?.toString().includes(searchedVal) ||
        toLowerCaseNonAccentVietnamese(row.ten)
          .toLowerCase()
          .includes(toLowerCaseNonAccentVietnamese(searchedVal))
    );
    setFilter(searchedVal.length < 1 ? data : filteredRows);
  };

  return (
    <div>
      <TextField
        onChange={(e) => requestSearch(e.target.value)}
        placeholder="Search by email"
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filter.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <DeleteIcon onClick={() => removeData(item.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Render Customers component */}
      <Customers employses={employses} onUpdateEmployse={onUpdateEmployse} />
    </div>
  );
}
