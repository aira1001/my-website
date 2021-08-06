import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Heading,
  chakra,
  Button,
  IconButton,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react';
import { FaPrint } from 'react-icons/fa';
import {
  TriangleDownIcon,
  TriangleUpIcon,
  EditIcon,
  DeleteIcon,
  ViewIcon,
  AddIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import {
  useTable,
  useSortBy,
  useResizeColumns,
  useBlockLayout,
} from 'react-table';
import Pagination from '../components/Pagination';
import { TextHeaders } from '../components/TextHeaders';
import styled from 'styled-components';
import {
  SecondaryButton,
  PrintButton,
  PrimaryButton,
} from '../components/Button';
import * as React from 'react';
import './ManageClass.css';

function Aksi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <div>
      <Stack direction="row" justify="center" maxW="500px">
        {/* <IconButton
          onClick={onOpen}
          class=" "
          icon={<DeleteIcon style={{ color: '#CA2424' }} />}
        /> */}
        <DeleteIcon
          style={{ color: '#CA2424' }}
          onClick={onOpen}
          h="25px"
          w="25px"
          mr="16px"
        />
        {/* <IconButton
          class=" "
          onClick={() => {
            alert('Edit Kelas !');
          }}
          icon={<EditIcon style={{ color: '#005FEE' }} />}
        /> */}
        <EditIcon
          h="25px"
          w="25px"
          style={{ color: '#005FEE' }}
          onClick={() => {
            alert('Edit Kelas !');
          }}
        />
        {/* <IconButton
          class=" "
          onClick={() => {
            alert('Lihat Detail Kelas !');
          }}
          icon={<ViewIcon style={{ color: '#000000' }} />}
        /> */}
        <ViewIcon
          h="25px"
          w="25px"
          style={{ color: '#000000', marginLeft: '20px' }}
          onClick={() => {
            alert('Lihat Detail Kelas !');
          }}
        />
      </Stack>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Peringatan !</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Apakah anda yakin ingin menghapus kelas ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Tidak
            </Button>
            <Button colorScheme="red" ml={3}>
              Ya
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default function ManageClass() {
  const data = React.useMemo(
    () => [
      {
        level: '10',
        jurusan: 'IPA',
        namaKelas: 'A',
        waliKelas: 'Mr.X',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPS',
        namaKelas: 'B',
        waliKelas: 'Mr.Y',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPA',
        namaKelas: 'B',
        waliKelas: 'Mr.X',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPS',
        namaKelas: 'A',
        waliKelas: 'Mr.Y',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPA',
        namaKelas: 'B',
        waliKelas: 'Mr.Y',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPA',
        namaKelas: 'A',
        waliKelas: 'Mr.X',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPS',
        namaKelas: 'A',
        waliKelas: 'Mr.X',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPS',
        namaKelas: 'B',
        waliKelas: 'Mr.Y',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
      {
        level: '10',
        jurusan: 'IPA',
        namaKelas: 'B',
        waliKelas: 'Mr.X',
        jumlahSiswa: '30 Siswa',
        // aksi: <Aksi />,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Level',
        accessor: 'level',
      },
      {
        Header: 'Jurusan',
        accessor: 'jurusan',
      },
      {
        Header: 'Nama Kelas',
        accessor: 'namaKelas',
      },
      {
        Header: 'Wali Kelas',
        accessor: 'waliKelas',
      },
      {
        Header: 'Jumlah Siswa',
        accessor: 'jumlahSiswa',
      },
      // {
      //   Header: 'Aksi',
      //   accessor: 'aksi',
      // },
    ],
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 294,
      maxWidth: 600,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data, defaultColumn },
    useSortBy,
    useResizeColumns,
    useBlockLayout
  );

  return (
    <div style={{ height: 400, width: '100%', backgroundColor: '#ffffff' }}>
      <div style={{ marginLeft: '20px', paddingTop: '20px' }}>
        <Heading style={{ padding: '14px' }} size="xl" textAlign="center">
          Manajemen Kelas
        </Heading>
        <div style={{ margin: '14px' }}>
          <Text
            style={{
              marginRight: '10px',
              float: 'left',
            }}
          >
            Tahun Ajaran&emsp;&emsp;&emsp;&emsp;:
          </Text>
          <Text>2021 / 2022</Text>
        </div>
        <div style={{ margin: '14px' }}>
          <Text
            style={{
              marginRight: '10px',
              float: 'left',
            }}
          >
            Periode&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:
          </Text>
          <Text> Ganjil</Text>
        </div>
        <div style={{ margin: '14px' }}>
          <Text
            style={{
              marginRight: '10px',
              float: 'left',
            }}
          >
            Jumlah Kelas&emsp;&emsp;&emsp;&emsp;&nbsp;:
          </Text>
          <Text> 5 Kelas</Text>
        </div>
        <div style={{ margin: '14px' }}>
          <Text
            style={{
              marginRight: '10px',
              float: 'left',
            }}
          >
            Jumlah Siswa&emsp;&emsp;&emsp;&emsp;:
          </Text>
          <Text>L = 75, P = 75</Text>
        </div>
      </div>
      <Heading as="h2" size="md" mt="40px" ml="30px">
        Daftar Kelas
      </Heading>
      <Flex>
        <Box mt="18px">
          <InputGroup ml="30px" maxW="500px">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" textAlign="center" />}
              pb={2}
            />
            <Input
              placeholder="Cari disini..."
              style={{
                height: '35px',
                width: '250px',
                borderRadius: '25px',
                border: '2px solid #a6a6a6',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '21px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            />
          </InputGroup>
        </Box>
        <Spacer />
        <Box mr="10px" mt="15px" mb="15px">
          <SecondaryButton
            text="Tambah Kelas"
            open={() => {
              alert('tambah Kelas !');
            }}
          />
        </Box>
      </Flex>
      <div>
        <Table
          // className="TableClass"
          variant="striped"
          {...getTableProps()}
          style={{
            width: '100%',
            display: 'inline-block',
            fontFamily: 'Poppins, sans-serif',
            fontStyle: 'normal',
            lineHeight: '21px',
            letterSpacing: '0em',
            backgroundColor: '#ffffff',
            borderSpacing: 0,
            border: '1px solid #CBD5E0',
            overflowX: 'scroll',
            overflowY: 'disible',
            position: 'relative',
            textAlign: 'center',
            borderCollapse: 'collapse',
          }}
        >
          <Thead
            style={{
              // textAlign: 'center',
              // position: 'sticky',
              // top: 0,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: '21px',
              letterSpacing: '0em',
              backgroundColor: 'rgb(158, 157, 157)',
            }}
          >
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    // textAlign="center"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    // margin="0px"
                    // padding="0.5rem"
                    width="150px"
                    position="relative"
                    borderRight="1px"
                    borderRightColor="gray.300"
                    h="56px"
                  >
                    {column.render('Header')}
                    {/* <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span> */}
                    <Flex direction="column" float="right">
                      <TriangleUpIcon aria-label="sorted ascending" />
                      <TriangleDownIcon aria-label="sorted descending" />
                    </Flex>
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? 'isResizing' : ''
                      }`}
                    />
                  </Th>
                ))}
                <Th width="290px">Aksi </Th>
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} height="56px">
                  {row.cells.map((cell) => (
                    <Td
                      className="rowClass"
                      // borderRight="1px solid black"
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      // position="relative"
                      // textAlign="center"
                      // margin="0px"
                      // padding="0.5rem"
                      // width={defaultColumn}
                      // style={{
                      //   textAlign: 'center',
                      //   borderRight: '1px solid #CBD5E0',
                      //   width: '294px',
                      // }}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                  <Td width="290px">{<Aksi />}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>

      <Pagination page={15} perPage={15} total={15} />
      <PrimaryButton text="Export" />
    </div>
  );
}
