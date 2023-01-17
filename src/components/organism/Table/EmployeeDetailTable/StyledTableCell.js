import { Components } from '../../../../utils/material-ui';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const { TableCell, TableRow } = Components;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.tableHeadingColor,
    color: theme.palette.common.white,
    padding: theme.spacing(1)
    // fontFamily: theme.palette.font.fontFamily
    // borderRadius: '10px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: theme.spacing(1.5),
    fontWeight: theme.palette.font.fontWeight
    // fontFamily: theme.palette.font.fontFamily
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'red'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 5
  }
}));

export { StyledTableCell, StyledTableRow };
