import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface NavLinkProps {
  current: number;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
    }
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid transparent;
  transition: opacity 0.2s;

  ${props =>
    props.current === 1 &&
    css`
      border-bottom: 2px solid #ff872c;
    `}

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
