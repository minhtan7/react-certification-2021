import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import mock from '../../mockData/youtube-videos-mock.json';
import Card from '../../components/Card/Card.component';

const MultiCard = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin: 0px auto;
`;

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {/*  {authenticated ? (
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
      <MultiCard>{mock && mock.items?.map((i) => <Card card={i} />)}</MultiCard>
    </section>
  );
}

export default HomePage;
