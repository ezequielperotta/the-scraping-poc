import * as React from 'react';
import { Box, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';

interface CustomModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  productName: string;
  priceS1: string;
  priceS2: string;
  priceS3: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, setOpen, productName, priceS1, priceS2, priceS3 }) => {

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
        Fuentes y precios de producto
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Typography sx={{ mt: 2 }} variant="h6" component="p" color={'cornflowerblue'}>
            {productName}
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h6" component="p">
            Carrefour: ${priceS1}
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h6" component="p">
            Jumbo: ${priceS2}
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h6" component="p">
            La coope en casa: ${priceS3}
          </Typography>
        </Typography>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default CustomModal;
