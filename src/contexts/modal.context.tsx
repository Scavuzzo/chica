import { createContext, ReactNode, useState } from 'react';
import { Modal, ModalProps } from 'components/Modal/Modal.component';

export interface ModalProviderStore {
  showModal: (params: ModalProviderProps) => void;
  showBasicModal: (content: string, onSave: () => void, title?: string) => void;
  hideModal: () => void;
}

interface ModalProviderProps {
  content?: ReactNode | string;
  title?: ReactNode | string;
  subTitle?: ReactNode | string;
  hasDividers?: boolean;
  closeIcon?: boolean;
  customActions?: ReactNode;
  displayCustomActions?: boolean;
  onSave?: () => void;
}

const initialState: ModalProps = {
  open: false,
};

export const ModalContext = createContext({} as ModalProviderStore);

const ModalProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [options, setOptions] = useState<ModalProps>(initialState);

  const showModal = (params: ModalProviderProps): void => {
    setOptions({ open: true, ...params });
  };

  const showBasicModal = (
    content: string,
    onSave: () => void,
    title?: string,
  ): void => {
    setOptions({ open: true, title: title, content, onSave });
  };

  const hideModal = (): void => {
    setOptions({ open: false });
  };

  return (
    <ModalContext.Provider value={{ showModal, showBasicModal, hideModal }}>
      {children}
      <Modal {...options} onCloseModal={hideModal} />
    </ModalContext.Provider>
  );
};

export { ModalProvider };
export const ModalConsumer = ModalContext.Consumer;
