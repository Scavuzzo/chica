import { createContext, ReactNode, useState, useEffect } from 'react';
import { PopUp, PopUpProps } from 'components/PopUp/popUp.component';

export interface PopUpProviderStore {
  showPopUp: (params: PopUpProviderProps) => void;
  hidePopUp: () => void;
}

interface PopUpProviderProps {
  children?: ReactNode | string;
  closeIcon?: boolean;
  onSave?: () => void;
}

const initialState: PopUpProps = {
  open: false,
};

export const PopUpContext = createContext({} as PopUpProviderStore);

const PopUpProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [options, setOptions] = useState<PopUpProps>(initialState);

  const showPopUp = (params: PopUpProviderProps): void => {
    setOptions({ open: true, ...params });
  };

  const hidePopUp = (): void => {
    setOptions({ open: false });
  };

  useEffect(() => {
    options.open
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [options.open]);

  return (
    <PopUpContext.Provider value={{ showPopUp, hidePopUp }}>
      {children}
      <PopUp {...options} onClosePopUp={hidePopUp} />
    </PopUpContext.Provider>
  );
};

export { PopUpProvider };
export const PopUpConsumer = PopUpContext.Consumer;
