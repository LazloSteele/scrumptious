// src/App.tsx
import { Typography, Container } from "@mui/material";
import Ingredients from "./components/ingredients";

function App() {

  return (
    <Container
      maxWidth={false} // overrides default 1200px width for MUI containers
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 4,
        margin: 0,
        width: "100vw",
        boxSizing: "border-box" 
        }}
    >
      <Typography 
        variant="h4" 
        gutterBottom align="center"
      >
        Hello Scrumptious!
      </Typography>

      <Ingredients />
    </Container>
  );
}

export default App;
