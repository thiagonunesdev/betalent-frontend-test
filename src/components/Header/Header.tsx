import type { JSX } from 'react';

import { Container } from '@styles/Layout.styles';
import { HeaderStyled } from './Header.style';
import Logo from '@assets/logos/logo.svg';

const Header = (): JSX.Element => {
  return (
    <HeaderStyled data-testid="main-header">
      <Container>
        <a href="https://betalent.tech/" target="_blank">
          <Logo />
        </a>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
