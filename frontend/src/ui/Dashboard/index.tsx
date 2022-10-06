import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardView from './view';

const mdTheme = createTheme();

const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => setOpen(!open);

  return (
    <ThemeProvider theme={mdTheme}>
      <DashboardView toggleDrawer={toggleDrawer} open={open} />
    </ThemeProvider>
  );
};

export default Dashboard;
