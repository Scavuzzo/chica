import { useTheme } from '@mui/material/styles';
import { Close } from '@mui/icons-material';
import { Alert as AlertComponent, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { FC } from 'react';
import { useTranslation } from 'next-i18next';

export type Variant = 'error' | 'warning' | 'success';

export interface AlertProps {
  open: boolean;
  handleOnClose: () => void;
  message: string;
  type: Variant;
}

export const Alert: FC<AlertProps> = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      classes={{
        root: 'snackbar',
      }}
      open={props.open}
      autoHideDuration={6000}
      onClose={props.handleOnClose}
    >
      <AlertComponent
        severity={props.type}
        variant='filled'
        classes={{
          root: 'alert',
        }}
        sx={{ color: theme.palette.background.paper }}
        action={
          <Button
            color='inherit'
            size='small'
            endIcon={<Close />}
            onClick={props.handleOnClose}
          >
            {t('alert.closeButton')}
          </Button>
        }
      >
        {props.message}
      </AlertComponent>
    </Snackbar>
  );
};
