import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Scraper POC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;
