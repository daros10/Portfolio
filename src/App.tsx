import { Container } from '@material-ui/core';
import React from 'react';
import ParticlesContainer from './components/ParticlesContainer';
import { Introduce } from './pages/Introduce';

function App() {
  return (
    <>
      <ParticlesContainer />
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          marginTop: '150px',
          marginBottom: '50px',
          marginLeft: '12px',
          marginRight: '12px',
        }}
      >
        <Container fixed>
          <Introduce />
        </Container>
      </div>
    </>
  );
}

export default App;
