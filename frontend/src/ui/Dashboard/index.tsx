import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardView from './view';
import { useEffect, useState } from 'react';
import GetProductList from '../../core/useCases/GetProductList';
import { scrapingService } from '../../core/infrastructure/instances';
import { Product } from '../../core/domain/Product';

const mdTheme = createTheme();

const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const productList = new GetProductList(scrapingService);

  useEffect(() => {
    const init = async () => {
      try {
        const prods = await productList.execute();
        setProducts(prods);
      } catch (e) {
        console.log(e);
      }
    };
    console.log(products);
    init();

  }, []);

  const toggleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={mdTheme}>
      <DashboardView toggleDrawer={toggleDrawer} open={open} products={products} />
    </ThemeProvider>
  );
};

export default Dashboard;
