import React from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
import theme from '../../utils/theme';
// import { useLocation } from 'react-router';

const { withStyles, Card, Typography, Grid } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const selectedCardColor = {
  color: theme.palette.primary.tableHeadingColor,
  fontFamily: theme.palette.font.fontFamily,
  borderRadius: '28px',
  border: `1px solid ${theme.palette.primary.tableHeadingColor}`,
  width: '190px'
};

const unselectedCardColor = {
  cursor: 'pointer',
  color: 'black',
  backgroundColor: 'white',
  fontFamily: theme.palette.font.fontFamily,
  borderRadius: '28px',
  width: '190px'
};

function CountsCard(props) {
  const { item, onClick, selectedCard } = props;

  return (
    <Card
      onClick={() => onClick(item)}
      sx={selectedCard.value === item.value ? selectedCardColor : unselectedCardColor}>
      <Container>
        <Item
          style={{
            backgroundColor: theme.palette.primary.tableHeadingColor,
            borderRadius: '50%',
            display: 'flex',
            height: '45px',
            width: '45px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <img
            style={{ height: '18px', width: '18px' }}
            src={require(`../../Assets/AlertsIcon/${item?.value}.svg`).default}
            alt="distribution icon"
          />
        </Item>
        <Item
          xs
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography sx={{ fontWeight: '500' }} align="center">
            {item.label}
          </Typography>
        </Item>
      </Container>
    </Card>
  );
}

export default withStyles(styles)(CountsCard);
