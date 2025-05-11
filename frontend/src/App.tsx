// src/App.tsx
import { Button, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function App() {

  useEffect(() => {
    // This is where you can add any side effects or data fetching
    // For example, you can fetch data from an API or perform some initialization
    console.log(import.meta.env.VITE_API_URL);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hello Scrumptious!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
