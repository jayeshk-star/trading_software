import React from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
import theme from '../../utils/theme';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

const { withStyles, Grid } = Components;

const Container = (props) => <Grid container {...props} />;
// const Item = (props) => <Grid item {...props} />;

const NotFound = ({ classes }) => {
  return (
    <Container direction={'column'} className={classes.notFoundPage}>
      <ThreeDots
        height="80"
        width="80"
        radius="10"
        color={theme.palette.primary.tableHeadingColor}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
