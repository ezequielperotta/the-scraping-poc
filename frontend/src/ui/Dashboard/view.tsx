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
import CustomModal from './components/CustomModal';
import { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import { Source } from '../../core/domain/types';

interface DashboardViewProps {
  toggleDrawer: () => void;
  open: boolean;
  products: Product[];
}

const DashboardView: React.FC<DashboardViewProps> = ({ toggleDrawer, open, products }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [sources, setSources] = useState<Source[]>([]);
  const [type, setType] = useState<string>('Todos');
  const [brand, setBrand] = useState<string>('Todas');

  const handleProductSelection = (sources: Source[], productName: string) => {
    setProductName(productName);
    setSources(sources);
    setOpenModal(true);
  };

  useEffect(() => {
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.filter((value) => value == 3));
  });

  const handleChangeBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
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
          {/*<Grid container spacing={3} style={{ marginTop: 5 }}>*/}
          {/*  <Grid item xs={4} >*/}
          {/*    <React.Fragment>*/}
          {/*      <FormControl fullWidth>*/}
          {/*        <InputLabel id="demo-simple-select-label">Productos</InputLabel>*/}
          {/*        <Select*/}
          {/*          labelId="demo-simple-select-label"*/}
          {/*          id="demo-simple-select"*/}
          {/*          value={brand}*/}
          {/*          label="Age"*/}
          {/*          onChange={handleChangeBrand}*/}
          {/*        >*/}
          {/*          <MenuItem value={1}>Todas</MenuItem>*/}
          {/*          <MenuItem value={10}>Mayonesa clasica</MenuItem>*/}
          {/*          <MenuItem value={20}>Leche entera clasica</MenuItem>*/}
          {/*          <MenuItem value={30}>Jamon</MenuItem>*/}
          {/*        </Select>*/}
          {/*      </FormControl>*/}
          {/*    </React.Fragment>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={4} >*/}
          {/*    <React.Fragment>*/}
          {/*      <FormControl fullWidth>*/}
          {/*        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>*/}
          {/*        <Select*/}
          {/*          labelId="demo-simple-select-label"*/}
          {/*          id="demo-simple-select"*/}
          {/*          value={type}*/}
          {/*          label="Age"*/}
          {/*          onChange={handleChangeType}*/}
          {/*        >*/}
          {/*          <MenuItem value={10}>450g</MenuItem>*/}
          {/*          <MenuItem value={20}>x Litro</MenuItem>*/}
          {/*          <MenuItem value={30}>Thirty</MenuItem>*/}
          {/*        </Select>*/}
          {/*      </FormControl>*/}
          {/*    </React.Fragment>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={2}>*/}
          {/*    <Button size="large" variant="contained" endIcon={<SendIcon />}>*/}
          {/*      Buscar*/}
          {/*    </Button>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          <CustomModal
            open={openModal}
            setOpen={setOpenModal}
            sources={sources}
            productName={productName}
          />
          <Grid container spacing={3} style={{ marginTop: 5 }}>
            {products.map((product: Product, index: number) => <PriceBox key={index} title={product.name} price={'$' + product.averagePrice} imageUrl={product.imageUrl} sources={product.sources} handleProductSelection={handleProductSelection} /> )}
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
