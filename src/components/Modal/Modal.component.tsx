import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Breakpoint, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { def } from 'utils/generic.utils';
import { useModal } from 'components/Modal/Modal.hooks';

export interface ModalProps {
  content?: ReactNode | string;
  title?: ReactNode | string;
  subTitle?: ReactNode | string;
  hasDividers?: boolean;
  closeIcon?: boolean;
  customActions?: ReactNode;
  open?: boolean;
  displayCustomActions?: boolean;
  onCloseModal?: () => void;
  onSave?: () => void;
  maxWidth?: Breakpoint;
}

export const Modal: FC<ModalProps> = ({
  content,
  title,
  subTitle,
  customActions,
  open,
  onCloseModal,
  onSave,
  displayCustomActions = false,
  closeIcon = false,
  hasDividers = false,
  maxWidth,
}) => {
  const { isOpen, handleSave } = useModal({ open, onSave, onCloseModal });

  return (
    isOpen === true && (
      <Dialog maxWidth={maxWidth} open={isOpen}>
        <DialogTitle sx={{ pt: 2 }}>
          {(def(title) || def(subTitle)) && (
            <div>
              <Typography variant='h6' fontWeight='600'>
                {title}
              </Typography>
              <Typography variant='subtitle2'>{subTitle}</Typography>
            </div>
          )}
          {closeIcon && (
            <IconButton
              aria-label='close'
              onClick={onCloseModal}
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
        </DialogTitle>
        <DialogContent sx={{ pb: 4 }} dividers={hasDividers}>
          {content}
        </DialogContent>
        {displayCustomActions === true && (
          <DialogActions>
            {def(customActions) ? (
              customActions
            ) : (
              <div>
                <Button
                  autoFocus
                  onClick={onCloseModal}
                  style={{ marginRight: '1rem' }}
                >
                  Cancel
                </Button>

                <Button
                  autoFocus
                  onClick={handleSave}
                  color='primary'
                  variant='contained'
                >
                  Confirm
                </Button>
              </div>
            )}
          </DialogActions>
        )}
      </Dialog>
    )
  );
};
