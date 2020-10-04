import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { HeaderContainer, HeaderSection } from './components';

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
      <HeaderSection />
      <HeaderSection>
        <h1>Video Deck</h1>
      </HeaderSection>
      <HeaderSection>
        {authenticated ? (
          <Link to="/" onClick={deAuthenticate}>
            <button type="button"> Logout </button>
          </Link>
        ) : (
          <Link to="/login">
            <button type="button"> Login </button>
          </Link>
        )}
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
