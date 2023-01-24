import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FC, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { css } from '@mui/material';

export interface PopUpProps {
  open?: boolean;
  children?: ReactNode | string;
  onClosePopUp?: (event?: unknown, reason?: unknown) => void;
  onSubmit?: () => void;
  closeIcon?: boolean;
}

export const PopUp: FC<PopUpProps> = ({
  children,
  open,
  onClosePopUp,
  closeIcon,
}) => {

  return (
    <Backdrop 
      css={css`
        backdrop-filter: 'blur(6px)';
        background: 'rgba(0, 0, 0, .1)';
        zIndex: 1000;
      `} 
      open={open}
    >
      <Box 
        css={css`
          position: 'relative';
          margin: 20;
          max-width: '100vw';
          max-height: '100vh';
        `}
        color='white'
      >
        {children}
        {closeIcon && (
          <IconButton
            aria-label='close'
            onClick={onClosePopUp}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    </Backdrop>
  );
};
