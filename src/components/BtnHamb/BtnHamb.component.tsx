import { useContext } from 'react';
import { ViewContext } from 'contexts/view.context';
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion';
import { css } from '@mui/material';
import { MenuOpen } from 'components/BtnHamb/MenuOpen.component';

interface BtnHambProps {
  open?: boolean;
  color?: string;
}

export const BtnHamb = (props: BtnHambProps): JSX.Element => {
  const { menuOpen, setMenuOpen } = useContext(ViewContext);

  const transitions = {
    duration: 0.4,
  };

  const top: Variants = {
    initial: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
      rotate: 0,
    },
    open: {
      rotate: 45,
      y: 6,
    },
    exit: {
      opacity: 0,
    },
  };

  const bottom: Variants = {
    initial: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
      rotate: 0,
      background: 'var(--mui-palette-text-primary)',
    },
    open: {
      rotate: -45,
      y: 6,
      marginTop: 0,
      background: 'var(--mui-palette-text-primary)',
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <div 
        css={css`
            position: relative;
            width: fit-content;
            margin-left: auto;
            margin-block: auto;
        `}
      >
          <div 
            onClick={(): void => setMenuOpen(!menuOpen)}
            css={css`
              display: block;
              width: 30px;
              height: 40px;
              position: relative;
              z-index: 1000;
              cursor: pointer;
              & span {
                  width: 30px;
                  background: var(--mui-palette-text-primary);
                  height: 1px;
                  z-index: 1000;
                  position: absolute;
                  top: 12px;
                  left: 0;
                  &:last-child {
                    margin-top: 10px;
                  }
              }
            `}
            >
            <m.span
              animate={menuOpen ? 'open' : 'closed'}
              exit='exit'
              variants={top}
              transition={transitions}
              key='btn-hamb1'
            />
            <m.span
              animate={menuOpen ? 'open' : 'closed'}
              exit='exit'
              variants={bottom}
              transition={transitions}
              key='btn-hamb2'
            />
          </div>
      </div>
      <MenuOpen />
    </LazyMotion>
  );
};
