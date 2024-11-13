import React from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import { Backdrop, Box, Fade, Modal, Stack } from '@mui/material';

interface ModalPropsType {
  open: boolean;
  width?: string;
  height?: string;
  Component: any;
  handleClose?: any;
  styles?: any;
  ariaLabel?: string;
}
const customModal = ({ open, handleClose, Component, height, width, styles, ariaLabel }: ModalPropsType) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={ariaLabel}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Fade in={open}>
        <Box
          minHeight={height ?? '30%'}
          width={width ?? '60%'}
          p={1.5}
          sx={{
            borderRadius: '12px',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid white',
            background: 'white',
            backdropFilter: `blur("5px")`,
            ...styles,
          }}>
          <Stack direction={'row'} justifyContent={'flex-end'}>
            <CancelIcon sx={{ height: '20px', width: '20px' }} onClick={handleClose} />
          </Stack>
          {Component}
        </Box>
      </Fade>
    </Modal>
  );
};

const CustomModal = React.memo(customModal);
export default CustomModal;
