import { Container } from '@material-ui/core';
import React from 'react';
import ParticlesContainer from './components/ParticlesContainer';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <>
      <ParticlesContainer />
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Container fixed>
          <AppRouter />
        </Container>
      </div>
    </>
  );
}

export default App;
