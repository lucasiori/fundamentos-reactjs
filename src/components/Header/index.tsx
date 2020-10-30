import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, NavLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <ul>
            <NavLink to="/" current={location.pathname === '/' ? 1 : 0}>
              Listagem
            </NavLink>
            <NavLink
              to="/import"
              current={location.pathname === '/import' ? 1 : 0}
            >
              Importar
            </NavLink>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
