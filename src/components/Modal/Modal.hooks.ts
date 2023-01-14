import { useEffect, useState } from 'react';

interface UseModalProps {
  open?: boolean;
  onCloseModal?: () => void;
  onSave?: () => void;
}

interface UseModalStore {
  isOpen: boolean;
  handleSave?: () => void;
}
export const useModal = ({
  open,
  onCloseModal,
  onSave,
}: UseModalProps): UseModalStore => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleSave = (): void => {
    onCloseModal();
    onSave();
  };

  return {
    isOpen,
    handleSave,
  };
};
