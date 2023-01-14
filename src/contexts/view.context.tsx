import { createContext, useState, useEffect } from 'react';

export interface ViewContextProps {
  menuOpen: boolean;
  setMenuOpen: (closed: boolean) => void;
}

export const ViewContext = createContext<ViewContextProps>({
  menuOpen: false,
  setMenuOpen: () => undefined,
});

export const ViewProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    menuOpen
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  return (
    <ViewContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
