import React, { ReactNode, useCallback } from 'react';

import {
  Alert,
  AlertProps,
  Variant,
} from 'components/Alert.component';
import { def } from '../utils/generic.utils';

export interface AlertProviderStore {
  showAlert: (x: { message: string; type?: Variant }) => void;
  hideAlert: () => void;
  showDefaultError: () => void;
}

const initialState: AlertProps = {
  open: false,
  message: '',
  type: 'success',
  handleOnClose: () => null,
};

export const AlertContext = React.createContext({} as AlertProviderStore);

const AlertProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [options, setOptions] = React.useState<AlertProps>(initialState);

  const hideAlert = (): void => setOptions({ ...initialState });

  const showAlert = useCallback(
    ({ handleOnClose = hideAlert, ...params }): void => {
      if (!def(params.message)) {
        params.message = 'Unknown error';
      }
      setOptions({ open: true, handleOnClose, ...params } as AlertProps);
    },
    [],
  );

  const showDefaultError = useCallback(
    (): void =>
      showAlert({
        message: 'Sorry, something went wrong. Please try again',
        type: 'error',
      }),
    [showAlert],
  );

  return (
    <AlertContext.Provider value={{ hideAlert, showAlert, showDefaultError }}>
      {children}
      <Alert {...(options as AlertProps)} />
    </AlertContext.Provider>
  );
};

export { AlertProvider };
export const AlertConsumer = AlertContext.Consumer;
