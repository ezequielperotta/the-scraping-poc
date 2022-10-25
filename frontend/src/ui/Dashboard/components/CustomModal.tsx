import * as React from 'react';
import { Box, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';
import { Source } from '../../../core/domain/types';

interface CustomModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  productName: string;
  sources: Source[];
}

const CustomModal: React.FC<CustomModalProps> = ({ open, setOpen, productName, sources }) => {

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
          {sources.map((source: Source, index: number) => <Typography key={index} sx={{ mt: 1 }} variant="h6" component="p">
            {source.name + ':' + source.price}
          </Typography>
          )}
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
