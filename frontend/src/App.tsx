// src/App.tsx
import { Container, Typography } from "@mui/material";
import Ingredients from "./components/ingredients";

function App() {

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hello Scrumptious!
      </Typography>
      <Ingredients />
    </Container>
  );
}

export default App;
