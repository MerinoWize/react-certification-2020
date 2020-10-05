import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { HeaderContainer, HeaderSection, HeaderButton, TitleButton } from './components';

const Header = () => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/logout');
  };

  const goHome = (event) => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        {authenticated ? (
          <Link to="/watchlist">
            <HeaderButton>My Whatchlist</HeaderButton>
          </Link>
        ) : null}
        <Link to="/search">
          <HeaderButton>Search</HeaderButton>
        </Link>
      </HeaderSection>
      <HeaderSection>
        <TitleButton type="button" onClick={goHome}>
          <h1>Video Deck</h1>
        </TitleButton>
      </HeaderSection>
      <HeaderSection>
        {authenticated ? (
          <Link to="/login">
            <HeaderButton onClick={deAuthenticate}>Logout</HeaderButton>
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
