// src/App.tsx
import { Typography, Container } from "@mui/material";
import Ingredients from "./components/ingredients";

function App() {

  return (
    <Container
      sx={{
        padding: 4,
        margin: 0, 
        width: "100vw",
        boxSizing: "border-box" 
        }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Hello Scrumptious!
      </Typography>

      <Ingredients />
    </Container>
  );
}

export default App;
