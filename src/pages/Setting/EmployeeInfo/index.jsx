import React from 'react';
import { Components } from '../../../utils/material-ui';
import styles from './styles';
import EmployeeDetailTable from '../../../components/organism/Table/EmployeeDetailTable';
// import theme from '../../../utils/theme';

const { withStyles, Grid } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const EmployeeInfo = ({ classes }) => {
  return (
    <Container>
      <Item md={12} style={{ width: '500px' }}>
        <EmployeeDetailTable />
      </Item>
    </Container>
  );
};

export default withStyles(styles)(EmployeeInfo);
