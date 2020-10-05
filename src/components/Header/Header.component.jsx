import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { HeaderContainer, HeaderSection, HeaderButton } from './components';

const Header = () => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/logout');
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <HeaderButton>My Whatchlists</HeaderButton>
      </HeaderSection>
      <HeaderSection>
        <h1>Video Deck</h1>
      </HeaderSection>
      <HeaderSection>
        {authenticated ? (
          <Link to="/login" onClick={deAuthenticate}>
            <HeaderButton>Logout</HeaderButton>
          </Link>
        ) : (
          <Link to="/login">
            <HeaderButton>Login</HeaderButton>
          </Link>
        )}
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
