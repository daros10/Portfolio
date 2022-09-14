import { Container } from "@material-ui/core";
import React from "react";
import ParticlesContainer from "./components/ParticlesContainer/ParticlesContainer";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <ParticlesContainer />
      <Container fixed>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
