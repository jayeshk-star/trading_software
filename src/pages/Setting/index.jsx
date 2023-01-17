import React, { useState } from 'react';
import { Components } from '../../utils/material-ui';
import styles from './styles';
import CountsCard from './countCard';
import EmployeeInfo from './EmployeeInfo';
// import Onboarding from './Onboarding';
import LatestOnboarding from './latestOnboarding/index';

const { withStyles, Grid, Box } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Settings = ({ classes }) => {
  const cards = [
    { value: 'completed', label: 'Onboarding', table: LatestOnboarding },
    { value: 'assigned', label: 'Employee Info', table: EmployeeInfo }
  ];

  const [selectedCard, setSelectedCard] = useState(cards[0]);

  return (
    <Container direction="column" p={2}>
      <Container justifyContent="space-between" alignItems="center" alignContent="center">
        <Box sx={{ flexGrow: 1 }}>
          <Container justify="space-between" alignItems="center" spacing={2}>
            {cards.map((item) => (
              <Item key={item.value}>
                <CountsCard item={item} selectedCard={selectedCard} onClick={setSelectedCard} />
              </Item>
            ))}
          </Container>
        </Box>
      </Container>

      <Item xs={12} mt={2}>
        <selectedCard.table></selectedCard.table>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(Settings);
