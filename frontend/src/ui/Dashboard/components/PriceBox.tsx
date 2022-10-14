import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import { Source } from '../../../core/domain/Source';

interface PriceBoxProps {
  title: string;
  price: string;
  imageUrl: string;
  sources: Source[];
  handleProductSelection: (sources: Source[], productName: string) => void;
}

const PriceBox: React.FC<PriceBoxProps> = ({ title, price, imageUrl, sources, handleProductSelection }) => {
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
          <Button onClick={() => handleProductSelection(sources, title)}>Ver fuentes</Button>
        </React.Fragment>
      </Paper>
    </Grid>
  );
};

export default PriceBox;
