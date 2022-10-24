import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './components/ListItems';
import Footer from './components/Footer';
import Header from './components/Header';
import PriceBox from './components/PriceBox';
import { Product } from '../../core/domain/Product';
import Typography from '@mui/material/Typography';
import CustomModal from './components/CustomModal';
import { useState } from 'react';
import { Source } from '../../core/domain/Source';

interface DashboardViewProps {
  toggleDrawer: () => void;
  open: boolean;
  products: Product[];
}

const DashboardView: React.FC<DashboardViewProps> = ({ toggleDrawer, open, products }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [priceS1, setPriceS1] = useState<string>('');
  const [priceS2, setPriceS2] = useState<string>('');
  const [priceS3, setPriceS3] = useState<string>('');

  const handleProductSelection = (sources: Source[], productName: string) => {
    setProductName(productName);
    setPriceS1(sources[0].price);
    setPriceS2(sources[1].price);
    setPriceS3(sources[2].price);
    setOpenModal(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} open={open} />
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <CustomModal
            open={openModal}
            setOpen={setOpenModal}
            priceS1={priceS1}
            priceS2={priceS2}
            priceS3={priceS3}
            productName={productName}
          />
          <Grid container spacing={3}>
            {products.map((product: Product, index: number) => <PriceBox key={index} title={product.name} price={'$' + product.averagePrice} imageUrl={product.sources[0].imageUrl} sources={product.sources} handleProductSelection={handleProductSelection} /> )}
          </Grid>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default DashboardView;
