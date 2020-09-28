import React, { useRef } from 'react';
// import { useHistory } from 'react-router-dom';
import VideoCardList from '../../components/VideoCardList';
// import { usePopularVids } from '../../utils/hooks/useYoutube';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

const HomePage = () => {
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // const deAuthenticate = event => {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // };

  return (
    <div ref={sectionRef}>
      {/* <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
      HOME
      <VideoCardList />
    </div>
  );
};

export default HomePage;
