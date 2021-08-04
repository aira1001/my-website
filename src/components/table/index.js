import * as React from "react";
import { DataGrid, useGridSlotComponentProps } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./index.css";

const columns = [
  {
    field: "level",
    headerName: "Level",
    headerClassName: "super-app-theme--header",
    width: 150,
    editable: true,
  },
  {
    field: "jurusan",
    headerName: "Jurusan",
    headerClassName: "super-app-theme--header",
    width: 150,
    editable: true,
  },
  {
    field: "namaKelas",
    headerName: "Nama Kelas",
    headerClassName: "super-app-theme--header",
    width: 170,
    editable: true,
  },
  {
    field: "waliKelas",
    headerName: "Wali Kelas",
    headerClassName: "super-app-theme--header",
    width: 250,
    editable: true,
  },
  {
    field: "jumlahSiswa",
    headerName: "Jumlah Siswa",
    headerClassName: "super-app-theme--header",
    // description: 'This column has a value getter and is not sortable.',
    editable: true,
    width: 200,
  },
  {
    field: "aksi",
    headerName: "Aksi",
    headerClassName: "super-app-theme--header",
    width: 417,
    type: "boolean",
    renderCell: () => (
      <strong>
        <IconButton component="span">
          <DeleteIcon
            style={{ color: "#0000ff" }}
            onClick={() => alert("hapus baris !")}
          />
        </IconButton>
        <IconButton component="span">
          <EditIcon
            style={{ color: "#0000ff" }}
            onClick={() => alert("Edit Baris !")}
          />
        </IconButton>
        <IconButton component="span">
          <VisibilityIcon
            style={{ color: "#0000ff" }}
            onClick={() => alert("lihat Detail Data !")}
          />
        </IconButton>
      </strong>
    ),
  },
];

const rows = [
  {
    id: 1,
    level: 10,
    jurusan: "IPA",
    namaKelas: "A",
    waliKelas: "MR.X",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 2,
    level: 10,
    jurusan: "IPS",
    namaKelas: "A",
    waliKelas: "MR.X",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 3,
    level: 10,
    jurusan: "IPA",
    namaKelas: "A",
    waliKelas: "MR.X",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 4,
    level: 10,
    jurusan: "IPS",
    namaKelas: "B",
    waliKelas: "MR.Y",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 5,
    level: 10,
    jurusan: "IPA",
    namaKelas: "B",
    waliKelas: "MR.X",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 6,
    level: 10,
    jurusan: "IPA",
    namaKelas: "B",
    waliKelas: "MR.X",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 7,
    level: 10,
    jurusan: "IPS",
    namaKelas: "A",
    waliKelas: "MR.Y",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 8,
    level: 10,
    jurusan: "IPS",
    namaKelas: "A",
    waliKelas: "MR.X",
    jumlahSiswa: "30 siswa",
  },
  {
    id: 9,
    level: 10,
    jurusan: "IPS",
    namaKelas: "B",
    waliKelas: "MR.Y",
    jumlahSiswa: "30 siswa",
  },
];

const defaultTheme = createMuiTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      "& .super-app-theme--header": {
        backgroundColor: "rgba(108, 122, 137, 1)",
        color: "#ffffff",
      },
      margin: ["20px 80px"],
      overflow: "hidden",
      borderRadius: "10px",

      "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
        borderBottom: `1px solid ${
          theme.palette.type === "light" ? "#f0f0f0" : "#303030"
        }`,
      },
      "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        borderRight: `1px solid ${
          theme.palette.type === "light" ? "#f0f0f0" : "#303030"
        }`,
      },
    },
    button: {
      borderRadius: ["40px"],
      height: ["46px"],
      width: ["150px"],
      padding: ["16px 30px"],
      marginLeft: ["1270px"],
    },
  }),
  { defaultTheme }
);
function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();

  return (
    <Pagination
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
export default function DataTable() {
  const classes = useStyles();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="header">
        <h1>Manajemen Kelas</h1>
        <p>Tahun Ajaran: 2021/2022</p>
        <p>Periode : Ganjil</p>
        <p>Jumlah Kelas : 5 Kelas</p>
        <p>Jumlah Siswa: L=70, P=60</p>
      </div>
      <Button
        onClick={() => {
          alert("Tambah Kelas !");
        }}
        variant="outlined"
        size="large"
        color="primary"
        className={classes.button}
      >
        Tambahkan
      </Button>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        // checkboxSelection
        disableSelectionOnClick
        components={{
          Pagination: CustomPagination,
        }}
      />

      <Button
        onClick={() => {
          alert("Eksport to PDF !");
        }}
        variant="outlined"
        size="large"
        color="primary"
        className={classes.button}
      >
        Eksport
      </Button>
    </div>
  );
}
