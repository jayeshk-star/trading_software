import React, { useState, useEffect } from 'react';
import styles from './styles';
import { StyledTableCell } from './StyledTableCell';
import columns from './head';
import { useStateValue } from '../../../../utils/store';
import { Components, Icons } from '../../../../utils/material-ui';
import { API_GET, API_HANDLE_ERROR } from '../../../../utils/api';
import Dialog from '../../../atom/Dialog';
import AddEmployee from '../../Modal/AddEmployee';
import theme from '../../../../utils/theme';
import tableColor from '../../../../utils/tableColor';
import ExportToExcel from '../../../../utils/downloadMergeColumnData';
import ExportTable from './exportTable';
import { getDate } from '../../../../utils/moment';

const {
  withStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Grid,
  TableCell,
  Button
} = Components;

const { EditIcon, DeleteIcon, SearchIcon } = Icons;

const Item = (props) => <Grid item {...props} />;

const EmployeeDetailTable = ({ classes }) => {
  const [, dispatch] = useStateValue();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [totalEmployees, setTotalEmployees] = React.useState(0);
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isAddEmployeeModal, setIsAddEmployeeModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [setIsOpenDeleteModel] = useState(false);
  const [exportData, setExportData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setPage(0);
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getAllAlertDetail();
  }, [dispatch, page, rowsPerPage, searchText, isEditModal, isAddEmployeeModal]);

  const getAllAlertDetail = () => {
    API_GET(
      `user/getEmployees?limit=${rowsPerPage}&skip=${
        page * rowsPerPage
      }&searchText=${searchText}&role=user`
    )
      .then((res) => {
        if (searchText) {
          setPage(0);
        }
        setRows(res?.data?.employees);
        setTotalEmployees(res?.data?.totalEmployees);
      })
      .catch((err) => {
        API_HANDLE_ERROR(err, dispatch);
      });
  };

  const handleClose = () => {
    setIsAddEmployeeModal(false);
    setIsEditModal(false);
    setIsOpenDeleteModel(false);
  };

  const handleAddEmployee = () => {
    setIsAddEmployeeModal(true);
  };
  const handleEdit = (item) => {
    setIsEditModal(true);
    setEditedData(item);
  };

  const handleExport = () => {
    API_GET(`user/getEmployees`)
      .then((res) => {
        setExportData(res?.data?.employees);
      })
      .catch((err) => {
        API_HANDLE_ERROR(err, dispatch);
      });

    setTimeout(() => {
      ExportToExcel('Employee_Table_Data', 'xlsx', `Employee_Details.xlsx`);
    }, 300);
  };

  const TableData = () => {
    return (
      <div id="Employee_Table_Data" style={{ display: 'none' }}>
        <ExportTable data={exportData} />
      </div>
    );
  };

  return (
    <Paper className={classes.root}>
      <Item xs={6}>
        <div className={classes.tablesearchrelative}>
          <SearchIcon className={classes.tablesearchsearchIcon} />
          <input
            type="tablesearch"
            className={classes.tablesearch}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search by Name or PhoneNumber"
          />
        </div>
      </Item>
      <Item sx={{ display: 'flex', p: 1, gap: '10px' }}>
        <Item sx={{ display: 'inline-flex', ml: 'auto' }}>
          {TableData()}
          <Button
            onClick={handleExport}
            size="small"
            style={{
              backgroundColor: theme.palette.primary.tableHeadingColor,
              color: theme.palette.common.white
            }}>
            Export
          </Button>
        </Item>

        <Item>
          <Button
            size="small"
            onClick={handleAddEmployee}
            style={{
              backgroundColor: theme.palette.primary.tableHeadingColor,
              color: theme.palette.common.white
            }}>
            Add employee
          </Button>
        </Item>
      </Item>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.head}>
            <TableRow>
              {columns &&
                columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  {'No Records found'}
                </TableCell>
              </TableRow>
            ) : (
              ''
            )}
            {rows &&
              rows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row._id}
                    style={{ backgroundColor: tableColor(index) }}>
                    {columns &&
                      columns.map((column, index) => {
                        const value = row[column.id] ?? '--';

                        if (column.id === 'action') {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              <Item sx={{ display: 'flex', gap: '7px' }}>
                                <Item>
                                  <EditIcon
                                    onClick={() => handleEdit(row)}
                                    sx={{ cursor: 'pointer' }}
                                  />
                                </Item>
                                <Item>
                                  <DeleteIcon sx={{ cursor: 'pointer', color: 'red' }} />
                                </Item>
                              </Item>
                            </StyledTableCell>
                          );
                        }

                        if (column.id === 'dob') {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.dateOfBirth !== null ? getDate(row?.dateOfBirth) : '-'}
                            </StyledTableCell>
                          );
                        }

                        if (column.id === 'sos') {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              <Item sx={{ cursor: 'pointer' }}>
                                <img
                                  src="https://img.icons8.com/ios/50/undefined/info--v1.png"
                                  height="22px"
                                  width="22px"
                                  alt="logo"
                                />
                              </Item>
                            </StyledTableCell>
                          );
                        }
                        if (column.id === 'officeCity') {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {`${row?.officeName}, ${row?.officeCity}`}
                            </StyledTableCell>
                          );
                        }

                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </StyledTableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={totalEmployees && totalEmployees ? totalEmployees : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog
        isOpen={isAddEmployeeModal}
        children={<AddEmployee handleClose={handleClose} />}></Dialog>
      <Dialog
        isOpen={isEditModal}
        children={
          <AddEmployee handleClose={handleClose} data={editedData} isEditModal={isEditModal} />
        }></Dialog>
    </Paper>
  );
};

export default withStyles(styles)(EmployeeDetailTable);
