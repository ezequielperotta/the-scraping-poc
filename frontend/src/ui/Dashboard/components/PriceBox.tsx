import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

interface PriceBoxProps {
  title: string;
  price: string;
  imageUrl: string
}

const PriceBox: React.FC<PriceBoxProps> = ({ title, price, imageUrl }) => {
  return (
    <Grid item xs={3}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <React.Fragment>
          <Title>{title}</Title>
          <img src={imageUrl} />
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            Precio promedio
          </Typography>
          <Typography component="p" variant="h4">
            {price}
          </Typography>
        </React.Fragment>
      </Paper>
    </Grid>
  );
};

export default PriceBox;
